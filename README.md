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

### Current transport policy (2026-09-21)

The 2026-09-08 standing policy in `/Users/pedro/Stuff/CLOUDFLARE-CREDENTIALS.md`
requires the authenticated Cloudflare plugin. It supersedes the legacy credential
runner instructions below. Preserve exact project/commit/artifact checks and verify
production after publication; do not extract plugin credentials or upload JWTs.

On 2026-09-21 the plugin verified project `valepath-website`, immutable ID
`691c1c43-cfe0-443b-830d-8abeb8e81462`, production branch `main`, domains
`valepath.com` and `www.valepath.com`, and a deployment without Functions.
The read-only asset presence probe (`POST /pages/assets/check-missing`, empty hashes)
failed with HTTP 403, code 8000013, "Authorization failed". The endpoint requires an
upload JWT, while the plugin request interface offers no authentication override.
No production mutation was attempted. Using the legacy runner for this concrete
capability gap requires explicit owner direction.

### Legacy runner reference

Deployments use Wrangler Direct Upload through the versioned runner in
`tools/portfolio-credentials/`. It accepts no target arguments and fixes account
`82675093f8de0440782f81032b6a33d1`, Pages project `valepath-website` with immutable ID
`691c1c43-cfe0-443b-830d-8abeb8e81462`, branch `main`, output `dist`, Wrangler
`4.128.0`, and the artifact limits in `capability.json`.
The application owns no Wrangler dependency; the reviewed runner carries its own
lifecycle-disabled, registry-integrity-locked toolchain.

This capability admits a static build only. Pages Functions, `_worker.js`, Wrangler
configuration, preview branches, and caller-supplied targets fail closed. The danger
case is destructive or wrong-project mutation: Cloudflare's Pages Write grant is
account-scoped and may affect every Pages project in the account even though this
runner permits only the immutable Valepath target.

### One-time credential enrollment

Use an account-owned token with an explicit 180-day expiry and Cloudflare Pages Write
only—never Workers, storage, DNS, WAF, Billing, or token administration. Save it in
1Password as `Valepath Website Cloudflare Pages Deploy`. The runner enrolls only
account `api-token` under login-Keychain service
`com.pedrortm.valepath-website.cloudflare.pages-deploy`.

After the owner creates and saves the reviewed token, run from a clean, fully pushed
`main`:

```bash
npm run cloudflare:status
npm run cloudflare:enroll
npm run cloudflare:verify
```

`enroll` transfers the secret through a hidden prompt; never place it in a command,
environment variable, file, generated asset, or CI secret. Run `verify` immediately,
then inspect the item in Keychain Access: only `/usr/bin/security` may be trusted and
“Allow all applications” must be disabled.

Authentication and authorization are separate boundaries. `status` reads Keychain
metadata only; `enroll` is an explicitly authorized attended transfer; `verify` makes
bounded non-mutating Cloudflare reads; and `deploy` is the only mutating
command. Credential availability never authorizes deployment. GitHub Actions builds
but holds no Cloudflare credential and cannot deploy.

### Routine deployment

Run this only when the current task explicitly authorizes production publication:

```bash
npm run deploy
```

The runner proves `HEAD == origin/main ==` the live remote branch, builds the committed
source with the locked dependency graph in a private workspace, validates `dist`, and
only then reads the dedicated Keychain replica. Credential possession is not
deployment authorization. Do not re-enable GitHub Pages or add a GitHub Pages `CNAME`
file.

Pages Write remains account-scoped even though the runner fixes one project. If the
token is exposed, over-scoped, superseded, or retired, revoke it in Cloudflare and
remove only this exact Keychain replica; retain non-secret lifecycle evidence in
1Password. Begin rotation at least 30 days before expiry: create and record the
replacement, delete the predecessor's exact Keychain item because in-place replacement
is forbidden, enroll and verify the replacement, and only then revoke the predecessor
in Cloudflare. See
[`tools/portfolio-credentials/README.md`](tools/portfolio-credentials/README.md).
