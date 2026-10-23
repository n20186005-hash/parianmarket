import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ÚNICO lugar para configurar el dominio del sitio.
const SITE_URL = 'https://parianmarket.com';
const site = SITE_URL.trim() || undefined;

export default defineConfig({
  site,
  output: 'static',
  integrations: site ? [sitemap({ filter: (page) => !/\/404\/?$/.test(new URL(page).pathname) })] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
