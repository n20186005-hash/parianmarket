import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ÚNICO lugar para configurar el dominio del sitio.
// Déjalo vacío hasta que el dominio esté decidido; el build seguirá funcionando.
const SITE_URL = '';
const site = SITE_URL.trim() || undefined;

export default defineConfig({
  site,
  output: 'static',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
