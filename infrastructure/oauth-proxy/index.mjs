/**
 * Decap CMS GitHub OAuth proxy
 *
 * Implements the two endpoints Decap CMS expects:
 *   GET /auth      → redirect to GitHub OAuth authorization page
 *   GET /callback  → exchange code for access token, send to Decap CMS popup
 *
 * Environment variables (set via OpenTofu):
 *   GITHUB_CLIENT_ID
 *   GITHUB_CLIENT_SECRET
 *   ALLOWED_ORIGIN
 */

const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize';
const GITHUB_TOKEN_URL = 'https://github.com/login/oauth/access_token';
const SCOPE = 'repo,user';

export const handler = async (event) => {
  const path = event.rawPath ?? '/';
  const params = event.queryStringParameters ?? {};

  if (path.endsWith('/auth')) {
    return handleAuth(params);
  }
  if (path.endsWith('/callback')) {
    return handleCallback(params);
  }
  return { statusCode: 404, body: 'Not found' };
};

function handleAuth(params) {
  const state = crypto.randomUUID();
  const url = new URL(GITHUB_OAUTH_URL);
  url.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID);
  url.searchParams.set('scope', SCOPE);
  url.searchParams.set('state', state);

  const origin = process.env.ALLOWED_ORIGIN;
  const githubUrl = url.toString();

  // Decap CMS (netlify-auth-providers) requires a two-step handshake:
  //   1. Popup → main:   postMessage('authorizing:github', origin)
  //   2. Main → popup:   postMessage('authorizing:github', popupOrigin)  (echo)
  //   3. Popup redirects to GitHub OAuth
  // Only after the echo does the main window switch its listener to wait for
  // the authorization:github:success:... message from the callback page.
  const provider = params.provider ?? 'github';
  const handshake = `authorizing:${provider}`;

  const script = `
    <script>
      (function() {
        var origin = ${JSON.stringify(origin)};
        var githubUrl = ${JSON.stringify(githubUrl)};
        var handshake = ${JSON.stringify(handshake)};

        if (!window.opener) {
          // Opened directly (not as a popup) — just go straight to GitHub
          window.location.href = githubUrl;
          return;
        }

        // Step 1: send handshake to main window
        window.opener.postMessage(handshake, origin);

        // Step 2: wait for echo from main window, then redirect to GitHub
        window.addEventListener('message', function handler(e) {
          if (e.data === handshake && e.origin === origin) {
            window.removeEventListener('message', handler);
            window.location.href = githubUrl;
          }
        });
      })();
    <\/script>
  `;

  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: `<!doctype html><html><body>${script}</body></html>`,
  };
}

async function handleCallback(params) {
  const { code, state } = params;

  if (!code) {
    return errorPage('Missing code parameter from GitHub OAuth callback.');
  }

  try {
    const res = await fetch(GITHUB_TOKEN_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
        state,
      }),
    });

    const data = await res.json();

    if (data.error) {
      return errorPage(`GitHub OAuth error: ${data.error_description ?? data.error}`);
    }

    const origin = process.env.ALLOWED_ORIGIN;
    const msg = JSON.stringify({
      token: data.access_token,
      provider: 'github',
    });

    // Post the token back to the Decap CMS popup opener, then close.
    // Fallback: some browsers nullify window.opener when a popup navigates
    // cross-origin (github.com → api.omcracing.com). In that case, store the
    // token in localStorage under the key Decap CMS polls, then redirect back
    // to the admin so the user can complete login without a popup.
    const script = `
      <script>
        (function() {
          var msg = 'authorization:github:success:' + ${JSON.stringify(msg)};
          var origin = ${JSON.stringify(origin)};
          if (window.opener) {
            window.opener.postMessage(msg, origin);
            setTimeout(function() { window.close(); }, 200);
          } else {
            // No opener — redirect main window to admin with token in sessionStorage
            sessionStorage.setItem('netlify-cms-auth', ${JSON.stringify(msg)});
            window.location.replace(origin + '/admin/');
          }
        })();
      <\/script>
    `;

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `<!doctype html><html><body>${script}</body></html>`,
    };
  } catch (err) {
    return errorPage(`Token exchange failed: ${err.message}`);
  }
}

function errorPage(message) {
  const origin = process.env.ALLOWED_ORIGIN;
  const script = `
    <script>
      (function() {
        var msg = 'authorization:github:error:' + ${JSON.stringify(JSON.stringify({ message }))};
        var origin = ${JSON.stringify(origin ?? '*')};
        if (window.opener) {
          window.opener.postMessage(msg, origin);
          setTimeout(function() { window.close(); }, 200);
        } else {
          document.body.innerText = 'Login error: ' + ${JSON.stringify(message)};
        }
      })();
    <\/script>
  `;
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: `<!doctype html><html><body>${script}</body></html>`,
  };
}
