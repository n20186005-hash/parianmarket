# Guía de El Parián Puebla

Sitio estático en español de México para el Mercado de Artesanías El Parián, Puebla.

## Tecnología

- Astro 7.2.10
- Tailwind CSS 4.3.3 con `@tailwindcss/vite` 4.3.3
- TypeScript 6.0.3 (rama compatible con `@astrojs/check` 0.9.10)
- pnpm 11.24.0
- Node.js 24.20.0 LTS
- Wrangler 4.127.1, Cloudflare Workers Static Assets

## Configurar el dominio

Edita **únicamente** `SITE_URL` en `astro.config.ts`.

- Vacío: el proyecto puede construirse sin dominio; no genera sitemap ni canonical/OG URL absolutos falsos.
- Con dominio real: `Astro.site` alimenta canonical, Open Graph, JSON-LD y `@astrojs/sitemap`.

No uses dominios de ejemplo.

## Desarrollo y validación

```bash
corepack enable
pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm qa
```

## Cloudflare Workers

```bash
pnpm deploy
```

`wrangler.jsonc` sirve `./dist` mediante Workers Static Assets.

## Analítica y consentimiento

GA4 `G-HXM22WWPKP` está preparado, pero el script sólo se inyecta si el usuario activa Analíticas en `/cookies/`. No hay banner/modal; las preferencias se gestionan en la página independiente.

## Fotografías

Consulta `PHOTO-SOURCES.md`. La sesión de construcción actual no pudo descargar los binarios por bloqueo de red del entorno; no se usaron imágenes generadas como sustituto de fotografías reales.

## Estado de verificación de esta entrega

El código recibió QA estático local, pero **no debe presentarse como validado con instalación limpia** hasta que un entorno con acceso a `registry.npmjs.org` ejecute la secuencia completa. Este paquete no incluye un `pnpm-lock.yaml` inventado o incompleto.
