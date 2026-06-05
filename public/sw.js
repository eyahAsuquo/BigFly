const CACHE_NAME = 'bigfly-cache-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    // Only handle GET requests
    if (req.method !== 'GET') return;

    // Cache images, scripts and styles for faster subsequent loads
    if (req.destination === 'image' || req.destination === 'script' || req.destination === 'style') {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) =>
                cache.match(req).then((cached) => cached || fetch(req).then((res) => { cache.put(req, res.clone()); return res; }))
            )
        );
    }
});
