/* Service Worker — Guía de El Parián Puebla (parianmarket.com) */
const VERSION = 'elparian-v2';
const SHELL_CACHE = 'elparian-shell-v2';
const ASSET_CACHE = 'elparian-assets-v2';

const SHELL = [
  '/',
  '/manifest.webmanifest',
  '/icons/favicon.svg',
  '/icons/favicon-32.png',
  '/icons/favicon-16.png',
  '/icons/apple-touch-icon.png',
  '/images/parian-concept.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith('elparian-') && key !== SHELL_CACHE && key !== ASSET_CACHE)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  // Navegación: red primero, caché como respaldo offline.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          if (response.status === 200) caches.open(SHELL_CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(async () => (await caches.match(request)) || new Response('Offline / Sin conexión', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } }))
    );
    return;
  }

  // Estáticos (img, css, js, svg, png, woff): caché primero, red como respaldo.
  const isAsset = /\.(css|js|svg|png|jpg|jpeg|webp|woff2?|ico|webmanifest)$/i.test(url.pathname);
  if (isAsset) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            if (response && response.status === 200) {
              const copy = response.clone();
              caches.open(ASSET_CACHE).then((cache) => cache.put(request, copy));
            }
            return response;
          })
      )
    );
  }
});
