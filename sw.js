var cacheName = 'abuhasanalanshori';
var filesToCache = [
  '/',
  './index.html',
  './index.js',
  './assets/js/main.js',
  './manifest.json',
  './assets/css/remixicon.css',
  './assets/css/bootstrap.min.css',
  './assets/css/aos.css',
  './assets/css/main.css',
  './favicon.ico',
  './assets/images/profile-image.jpg',
  './assets/images/hello-icon-152.png',
  './assets/images/hello-icon-144.png',
  './assets/js/jquery.min.js',
  './assets/js/bootstrap.bundle.min.js',
  './assets/js/main_pwa.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});