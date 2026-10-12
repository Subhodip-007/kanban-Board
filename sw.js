
const CACHE_NAME = "kanban-offline-v2";

const BASE_URL = self.registration.scope;

const APP_FILES = [
  BASE_URL,
  `${BASE_URL}index.html`,
  `${BASE_URL}script.js`,
  `${BASE_URL}style.css`,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_FILES))
  );

  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith("kanban-offline-") &&
                           key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );

  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);

  if (request.method !== "GET") return;
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    (async () => {
      // Serve the cached app immediately when navigating offline.
      if (request.mode === "navigate") {
        try {
          const response = await fetch(request);

          if (response.ok) {
            const cache = await caches.open(CACHE_NAME);
            await cache.put(request, response.clone());
          }

          return response;
        } catch {
          return (
            (await caches.match(request)) ||
            (await caches.match(`${BASE_URL}index.html`)) ||
            Response.error()
          );
        }
      }

      // Use cached local assets first.
      const cached = await caches.match(request);
      if (cached) return cached;

      try {
        return await fetch(request);
      } catch {
        return Response.error();
      }
    })()
  );
});
