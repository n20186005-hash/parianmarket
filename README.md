# El Parián Puebla visitor guide

Independent Spanish and English static Astro guide at https://parianmarket.com. Existing eight home/legal URLs are retained; two localized error pages are excluded from the sitemap.

## Local validation

Use the pinned package manager and lockfile: `pnpm install --frozen-lockfile`, then `npm run check`, `npm run build`, `npm run qa`, and `node --test tests/runtime.test.mjs`.

## Cloudflare

`wrangler.jsonc` names project `parianmarket`, serves `dist` through ASSETS and runs `worker.js` before assets. The configured build/deploy path is `npm run build` followed by `npx wrangler deploy`. Validate packaging with `npx wrangler deploy --dry-run`; this does not establish live production acceptance.

## Existing services

The browser requests Open-Meteo for the mapped area. Valid forecasts may be cached locally for30minutes; storage failure does not prevent displaying a fresh response. The service worker uses network-first navigation with a per-URL offline fallback.

Google Analytics is controlled through the existing cookie pages. A successful permission can load it immediately. Withdrawal disables this page before storage writes; failed persistence is reported honestly. The unused interface-preferences category is disabled. Hosting performance scripts are separate from this GA choice.

## Images and sources

See `PHOTO-SOURCES.md` for the three original CC0 conceptual SVGs, visibly labelled as illustrations. Unverified baseline JPGs are omitted. `SOURCES.md` lists visitor references and the distinction between municipal general hours and the third-party stall-linked Maps snapshot.
