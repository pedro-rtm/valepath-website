# Valepath Website

Source for Valepath's technology-transformation practice website.

- Canonical URL: <https://valepath.com>
- Production host: Cloudflare Pages project `valepath-website`
- Framework: Astro static output

## Website positioning

The homepage represents the broader transformation practice. Its DD section follows
Assess / Deploy / Transfer and routes investors to `/technology-due-diligence/`.
The dedicated page recovers the engagement options and deliverable structure from
`fcbd20c`, before the August 2026 expansion, in the current site design.

Audience: PE deal teams, operating partners and strategic acquirers evaluating an
engagement on desktop or mobile. They need to identify the appropriate scope,
understand outputs and indicative timing, inspect a sample and initiate contact.
The page uses concise cards, responsive columns and ordinary links without adding
forms, tracking, dependencies or a new data flow. Existing visual tokens are retained.

Historical prices and peer-benchmark claims are omitted. Delivery windows are
indicative and conditioned on scope and access. Sample material is labelled fictional;
80+ initiatives describes the transformation record, not completed transaction DDs.

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

Production is published by Cloudflare Pages Direct Upload from a local checkout. The
Pages project `valepath-website` (immutable ID `691c1c43-cfe0-443b-830d-8abeb8e81462`,
account `82675093f8de0440782f81032b6a33d1`, production branch `main`, domains
`valepath.com` and `www.valepath.com`) has no Git integration. The site is static: no
Pages Functions, `_worker.js` or Wrangler configuration. Do not re-enable GitHub Pages
or add a GitHub Pages `CNAME` file.

Run this only when the current task explicitly authorizes production publication, from
a clean `main` equal to `origin/main`:

```bash
npm ci
npm run deploy
```

`deploy` builds `dist/`, then `op run` resolves the references in `deploy.env` into the
Wrangler process only. The token is a non-expiring Pages Write token on the Velkan
Cloudflare account, held in 1Password (vault Velkan, item `Cloudflare — Velkan`, field
`Valepath Website — Pages Deploy`); the runbook is `CLOUDFLARE-CREDENTIALS.md` in the
studio repository. Never copy the value into a file, environment variable or CI secret.
Pages Write is account-scoped: it can alter or delete any Pages project in the account,
so credential possession is not publication authorization.

The last release through the retired runner was production deployment
`173f3c22-006c-4425-a7b0-049dda00f4ac` (commit `c8f2d51`, 2026-09-21).
