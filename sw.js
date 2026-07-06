// Minimale service worker zodat PA Manager installeerbaar is als app.
// Bewust geen caching: de app laadt altijd de nieuwste versie van GitHub.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
