const CACHE='verdant-guard-v42';
const CORE=['./','./index.html','./styles.css?v=20260818-9','./expansion.css?v=20260818-9','./game.js?v=20260818-9','./expansion.js?v=20260818-9','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./gameplay.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response;}).catch(()=>caches.match(event.request).then(hit=>hit||caches.match('./index.html'))));});
