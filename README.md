# Valepath Website

Source for Valepath's technology-transformation practice website.

- Canonical URL: <https://valepath.com>
- Production host: Cloudflare Pages project `valepath-website`
- Framework: Astro static output

## Local development

```bash
npm ci
npm run dev
```

## Production build

```bash
npm run build
```

The deployable site is emitted to `dist/`. GitHub Actions verifies this build but does
not deploy it.

## Deployment

Deployments use Wrangler Direct Upload. Authenticate Wrangler locally, then run:

```bash
npx --yes wrangler pages deploy dist \
  --project-name valepath-website \
  --branch main \
  --commit-hash "$(git rev-parse HEAD)" \
  --commit-message "$(git log -1 --pretty=%s)"
```

Do not re-enable GitHub Pages or add a GitHub Pages `CNAME` file. Never commit
credentials. If deployment is later automated in GitHub Actions, create a
least-privileged Cloudflare Pages token rather than reusing a DNS-capable credential.
