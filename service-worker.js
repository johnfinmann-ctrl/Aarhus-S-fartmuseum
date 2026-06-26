// Aarhus Søfartsmuseum – Service Worker
// Version bump this string on every deployment to force cache refresh
const CACHE_VERSION = 'asm-v3.0';
const CACHE_NAME = CACHE_VERSION;

// Core files to cache on install
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/om.html',
  '/historie.html',
  '/samlingen.html',
  '/fotos.html',
  '/arrangementer.html',
  '/nyheder.html',
  '/bog.html',
  '/frivillig.html',
  '/stoet.html',
  '/sponsorer.html',
  '/fremtid.html',
  '/aabningstider.html',
  '/kontakt.html',
  '/privatlivspolitik.html',
  '/manifest.json',
  '/offline.html',
  '/chat-config.js',
];

// ── Install: cache core assets ──────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ── Activate: delete old caches ─────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => {
      self.clients.claim();
      // Notify all open tabs that a new version is ready
      self.clients.matchAll({ type: 'window' }).then(clients =>
        clients.forEach(client => client.postMessage({ type: 'SW_UPDATED', version: CACHE_VERSION }))
      );
    })
  );
});

// ── Fetch: network-first for HTML, cache-first for assets ───
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle same-origin requests
  if (url.origin !== location.origin) return;

  // HTML pages: network-first, fall back to cache, then offline page
  if (request.mode === 'navigate' || request.headers.get('accept')?.includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        })
        .catch(() =>
          caches.match(request)
            .then(cached => cached || caches.match('/offline.html'))
        )
    );
    return;
  }

  // Assets: cache-first
  event.respondWith(
    caches.match(request)
      .then(cached => {
        if (cached) return cached;
        return fetch(request).then(response => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(request, clone));
          }
          return response;
        });
      })
      .catch(() => new Response('', { status: 408 }))
  );
});
