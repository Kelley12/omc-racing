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
  const state = params.state ?? crypto.randomUUID();
  const url = new URL(GITHUB_OAUTH_URL);
  url.searchParams.set('client_id', process.env.GITHUB_CLIENT_ID);
  url.searchParams.set('scope', SCOPE);
  url.searchParams.set('state', state);

  return {
    statusCode: 302,
    headers: { Location: url.toString() },
    body: '',
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

    // Post the token back to the Decap CMS popup opener
    const script = `
      <script>
        (function() {
          var token = ${JSON.stringify(data.access_token)};
          var provider = 'github';
          window.opener.postMessage(
            'authorization:' + provider + ':success:' + JSON.stringify({ token: token, provider: provider }),
            ${JSON.stringify(process.env.ALLOWED_ORIGIN)}
          );
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
  const script = `
    <script>
      window.opener.postMessage(
        'authorization:github:error:' + ${JSON.stringify(JSON.stringify({ message }))},
        ${JSON.stringify(process.env.ALLOWED_ORIGIN)}
      );
    <\/script>
  `;
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: `<!doctype html><html><body>${script}</body></html>`,
  };
}
