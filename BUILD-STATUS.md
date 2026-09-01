# Estado de construcción

## Completado

- Arquitectura Astro/Tailwind/TypeScript.
- Español de México en toda la interfaz pública.
- Página principal + Privacidad + Términos + Cookies como rutas independientes.
- JSON-LD TouristAttraction + LocalBusiness + FAQPage.
- Google Maps embebido con parámetros de idioma/región `es-MX` / `mx`.
- GA4 con consentimiento opt-in.
- `site` centralizado y sitemap condicional.
- Cloudflare Workers Static Assets.
- Logo y favicon locales y coherentes.
- QA estático de tokens prohibidos.

## Bloqueos del entorno actual

1. El contenedor no tiene salida de red hacia npm (`ECONNREFUSED` / `EAI_AGAIN`), por lo que Corepack no puede descargar pnpm ni dependencias. Por esa razón no se afirma que `pnpm install --frozen-lockfile`, `pnpm check` y `pnpm build` hayan pasado en esta sesión.
2. La misma restricción impide descargar los JPG de Wikimedia Commons. Las fuentes, autores y licencias están documentadas en `PHOTO-SOURCES.md`; no se sustituyeron con imágenes falsas.
3. No se incluye un lockfile fabricado. Debe generarse con pnpm 11.24.0 en un entorno con red y luego congelarse para la entrega final verificable.
4. El contenedor de esta sesión ejecuta Node.js 22.16.0, mientras que el proyecto fija Node.js LTS 24.20.0; por tanto, tampoco se afirma una validación limpia con la versión de Node requerida.
