const STATIC_CACHE_NAME = 'unicorn-static-cache-v9';
const DYNAMIC_CACHE_NAME = 'unicorn-dynamic-cache-v9';

// App shell files
const urlsToCache = [
  '.',
  '/index.html',
  '/manifest.json',
  '/logo.svg',
  '/icons/icon-192x192.svg',
  '/icons/icon-512x512.svg',
  '/icons/favicon.svg',
  '/icons/mask-icon.svg'
];

// Install event: cache the app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('Opened static cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate event: clean up old caches and enable navigation preloading
self.addEventListener('activate', event => {
  const cacheWhitelist = [STATIC_CACHE_NAME, DYNAMIC_CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      self.clients.claim();
      // Enable navigation preloading after activation
      if ('navigationPreload' in self.registration) {
        return self.registration.navigationPreload.enable().then(() => {
          console.log('Navigation preloading enabled.');
        });
      }
    })
  );
});

// Message event: listen for commands from the client
self.addEventListener('message', event => {
  if (event.data && event.data.action === 'CLEAR_CACHE_AND_RELOAD') {
    console.log('Clearing all caches...');
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            console.log('Deleting cache:', cacheName);
            return caches.delete(cacheName);
          })
        );
      }).then(() => {
        console.log('All caches cleared.');
        // Notify the client that the cache is cleared
        if (event.ports[0]) {
          event.ports[0].postMessage({ status: 'complete' });
        }
      })
    );
  }
});

// Fetch event: serve from cache or network with different strategies
self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // Strategy for navigation requests: Navigation Preload -> Network -> Cache
  if (event.request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          // Try the preloaded response first
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            console.log('Using preloaded response for:', event.request.url);
            return preloadResponse;
          }

          // If no preloaded response, try the network
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          // If the network fails, try to serve from cache for offline support
          console.log('Fetch failed; trying cache for:', event.request.url, error);
          const cachedResponse = await caches.match(event.request.url);
          if (cachedResponse) {
            return cachedResponse;
          }
          throw error;
        }
      })()
    );
    return;
  }

  // Strategy for Unsplash images and CDN scripts: Stale-While-Revalidate
  if (requestUrl.hostname === 'images.unsplash.com' || requestUrl.hostname === 'aistudiocdn.com' || requestUrl.hostname === 'ai.studio') {
    event.respondWith(
      caches.open(DYNAMIC_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          const fetchPromise = fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(err => {
            console.log('Fetch failed; returning offline page instead.', err);
          });
          
          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  // Strategy for App Shell & other assets: Cache First, falling back to Network
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200 && requestUrl.origin === self.location.origin) {
                return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse;
                });
            }
            return networkResponse;
        });
      }
    )
  );

  // Fallback strategy: return a placeholder response if the network fails
  event.respondWith(
    fetch(event.request).catch(() => {
      // Môžeš vrátiť fallback, alebo len ignorovať chybu
      return new Response('', { status: 200, statusText: 'Offline fallback' });
    })
  );
});