// Define the cache name
const CACHE_NAME = "connect-masjid-v1";

// Specify the assets you want to cache
const assetsToCache = [
  ".", // Alias for the index page
  "style.css", // Add your CSS file path
  "script.js", // Add your JavaScript file path
  "photos/BG.png", // Already included in your manifest
  // Add more files here as needed
];

// Install event - caches assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(assetsToCache);
    })
  );
});

// Fetch event to serve cached content when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached response if found, fetch from network otherwise
      return response || fetch(event.request);
    })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
