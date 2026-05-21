# OMC Racing — Owyhee Motorcycle Club Website

The official website for the [Owyhee Motorcycle Club](https://omcracing.com), an AMA-chartered motocross and trials club established in 1940 in Boise, Idaho.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, static export) |
| Language | TypeScript |
| UI | Material UI v6 |
| CMS | Decap CMS (git-based, hosted at `/admin`) |
| Hosting | AWS S3 + CloudFront |
| DNS / TLS | AWS Route 53 + ACM |
| IaC | OpenTofu (open-source Terraform) |
| CI/CD | GitHub Actions |
| Calendar | Google Calendar API v3 (read-only) |
| Events | iRaceReady (external links) |

The site is a fully static export — every page is pre-rendered at build time and served from S3 via CloudFront. The only client-side data fetch is the Google Calendar events on the `/calendar` page.

## Repository Structure

```
omc-racing/
├── .github/workflows/deploy.yml    # CI/CD: build → S3 sync → CloudFront invalidation
├── app/                            # Next.js App Router pages
│   ├── page.tsx                    # Home
│   ├── calendar/page.tsx           # Events (Google Calendar)
│   ├── motocross/page.tsx
│   ├── trials/page.tsx
│   ├── membership/page.tsx
│   ├── news/                       # Listing + [slug] individual posts
│   ├── sponsors/page.tsx
│   ├── history/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/Header.tsx           # Sticky nav with mobile drawer
│   ├── layout/Footer.tsx
│   ├── ThemeRegistry.tsx           # MUI dark theme provider
│   └── TrackStatusBanner.tsx       # CMS-managed track conditions banner
├── content/                        # Managed by Decap CMS (committed to Git)
│   ├── track-status.json           # Current track open/closed status
│   ├── news/*.md                   # News/announcement markdown posts
│   └── sponsors/*.json             # Sponsor entries
├── lib/
│   ├── theme.ts                    # MUI theme (dark, orange accent)
│   ├── content.ts                  # Helpers to read markdown/JSON content
│   └── googleCalendar.ts           # Google Calendar API client
├── public/admin/                   # Decap CMS (config.yml + index.html)
├── infrastructure/                 # OpenTofu IaC
│   ├── main.tf / variables.tf / outputs.tf
│   ├── s3.tf                       # S3 bucket + OAC policy
│   ├── cloudfront.tf               # CloudFront distribution
│   ├── route53.tf                  # DNS records
│   ├── acm.tf                      # TLS certificate (us-east-1)
│   ├── iam.tf                      # GitHub Actions OIDC role
│   ├── lambda.tf                   # Decap CMS OAuth proxy + API Gateway
│   └── oauth-proxy/index.mjs       # Lambda source (GitHub OAuth flow)
├── .env.local.example              # Environment variable reference
└── next.config.mjs                 # Static export config
```

## Local Development

### Prerequisites

- Node.js 20+
- npm 10+

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/Kelley12/omc-racing.git
cd omc-racing

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Google Calendar credentials (see below)

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The calendar page will show an error until you add your Google Calendar credentials.

### Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

```env
NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY=your_api_key_here
NEXT_PUBLIC_GOOGLE_CALENDAR_ID=your_calendar_id@group.calendar.google.com
```

**Getting a Google Calendar API key:**
1. Go to [Google Cloud Console](https://console.cloud.google.com) → APIs & Services → Credentials
2. Enable the **Google Calendar API** for your project
3. Create an API key, restrict it to the Google Calendar API only
4. Your Calendar ID is in Google Calendar → Settings → the club calendar → **Integrate calendar** section

### Build

```bash
# Produce the static export in out/
npm run build

# Preview the built site locally
npx serve out/
```

---

## Content Management (Decap CMS)

Once deployed, visit `https://omcracing.com/admin` to manage content via the CMS web UI. Log in with your GitHub account (must have write access to this repo).

### What you can manage in the CMS

| Content | How it works |
|---|---|
| **Track Status** | Updates `content/track-status.json` — banner on homepage shows Open / Closed / Limited with your message and date |
| **News Posts** | Creates/edits markdown files in `content/news/` — appears on the News page and homepage preview |
| **Sponsors** | Creates/edits JSON files in `content/sponsors/` — appears on Sponsors page and homepage |

Every save in the CMS commits to the `master` branch, which automatically triggers a GitHub Actions deploy. Changes are live within ~2 minutes.

### To add a news post without the CMS

Create a markdown file in `content/news/` with this frontmatter:

```markdown
---
title: Your Post Title
date: "2026-05-21"
author: OMC Board
excerpt: Short summary shown on the listing page.
---

Full post content here in **markdown**.
```

Then commit and push to `master`.

---

## Going Live — Step-by-Step

Follow these steps in order. The AWS resources must exist before the GitHub Actions deploy will work.

### Step 1 — Create a GitHub OAuth App (for Decap CMS admin)

1. Go to [github.com/settings/developers](https://github.com/settings/developers) → **New OAuth App**
2. Fill in:
   - **Application name:** OMC Racing CMS
   - **Homepage URL:** `https://omcracing.com`
   - **Authorization callback URL:** `https://api.omcracing.com/callback`
3. Save the **Client ID** and generate a **Client Secret** — you'll need these in Step 2

### Step 2 — Provision AWS infrastructure with OpenTofu

**Prerequisites:** [OpenTofu](https://opentofu.org/docs/intro/install/) installed, AWS CLI configured for your new account.

```bash
cd infrastructure

# Create a tfvars file (git-ignored — never commit this)
cat > terraform.tfvars <<EOF
github_client_id     = "your_oauth_app_client_id"
github_client_secret = "your_oauth_app_client_secret"
EOF

# Initialize OpenTofu (downloads AWS provider)
tofu init

# Preview what will be created
tofu plan

# Create all AWS resources (~3-5 minutes)
tofu apply
```

After `apply` completes, note these outputs — you'll need them in Step 3:

```bash
tofu output
# cloudfront_distribution_id  → for CLOUDFRONT_DISTRIBUTION_ID secret
# s3_bucket_name              → for S3_BUCKET_NAME secret
# github_deploy_role_arn      → for AWS_ROLE_ARN secret
# route53_nameservers         → update these at your domain registrar (Step 4)
```

> **Note:** If this is a brand-new AWS account, you may need to create an S3 bucket for OpenTofu state storage first. Uncomment the `backend "s3"` block in `infrastructure/main.tf` after creating the bucket.

### Step 3 — Add GitHub Actions secrets

In the GitHub repo → **Settings → Secrets and variables → Actions**, create these secrets:

| Secret name | Where to get it |
|---|---|
| `AWS_ROLE_ARN` | `tofu output github_deploy_role_arn` |
| `S3_BUCKET_NAME` | `tofu output s3_bucket_name` |
| `CLOUDFRONT_DISTRIBUTION_ID` | `tofu output cloudfront_distribution_id` |
| `GOOGLE_CALENDAR_ID` | Google Calendar settings (same as your `.env.local`) |
| `GOOGLE_CALENDAR_API_KEY` | Google Cloud Console (same as your `.env.local`) |

### Step 4 — Point your domain to AWS

1. Get the Route 53 nameservers: `tofu output route53_nameservers`
2. Log in to your domain registrar
3. Replace the existing nameservers with the four Route 53 nameservers
4. DNS propagation typically takes 15 minutes to a few hours

### Step 5 — Trigger the first deploy

Push any change to `master` (or trigger manually in the Actions tab):

```bash
git commit --allow-empty -m "Trigger initial deploy"
git push
```

The GitHub Actions workflow will:
1. Build the Next.js static export
2. Sync all files to S3 (with smart cache headers)
3. Invalidate the CloudFront cache

### Step 6 — Verify everything works

- [ ] `https://omcracing.com` loads over HTTPS
- [ ] All pages are accessible
- [ ] The calendar page shows upcoming events from Google Calendar
- [ ] `https://omcracing.com/admin` loads the Decap CMS login screen
- [ ] Log into the CMS with GitHub, update the Track Status, save — verify the homepage banner updates after ~2 minutes
- [ ] Check the site on mobile (hamburger nav, responsive layout)

### Step 7 — Cancel WordPress hosting

Once you've verified the new site is working correctly on `omcracing.com`, cancel your WordPress hosting subscription.

---

## Deployment (ongoing)

Every push to `master` automatically deploys via GitHub Actions. There is nothing manual to do for routine content or code updates.

```
Push to master
  └─ GitHub Actions
       ├─ npm ci
       ├─ npm run build
       ├─ aws s3 sync out/ → s3://omcracing-website
       └─ aws cloudfront create-invalidation
```

To deploy manually without a code change, go to **Actions → Deploy to AWS → Run workflow**.

---

## AWS Architecture

```
Internet
  └─ Route 53 (omcracing.com DNS)
       ├─ A record → CloudFront distribution
       └─ A record → api.omcracing.com → API Gateway (Decap CMS OAuth)

CloudFront
  └─ Origin: S3 bucket (private, accessed via OAC)
       └─ Static files from Next.js export

S3 Bucket (omcracing-website)
  ├─ HTML files      (Cache-Control: no-cache)
  ├─ JS/CSS/images   (Cache-Control: max-age=3600)
  └─ /admin/         (Cache-Control: no-store)

Lambda (omcracing-cms-oauth)
  └─ GitHub OAuth proxy for Decap CMS admin login
```

**Monthly AWS cost estimate (low-traffic site):**
- CloudFront: < $1/mo (free tier: 1TB transfer + 10M requests)
- S3: < $0.01/mo (a few MB of static files)
- Route 53: ~$0.50/mo per hosted zone
- Lambda: free tier (invoked only at CMS admin login)
- **Total: ~$1–2/mo**

---

## Adding Photos

Photos can be added via the Decap CMS media uploader (when editing a news post or sponsor) or by placing files directly in `public/images/` and committing them.

For larger photo sets, consider uploading directly to the `public/images/` folder in the repo. The files are served via CloudFront — no separate image hosting needed.

---

## License

Private repository. All rights reserved — Owyhee Motorcycle Club.
