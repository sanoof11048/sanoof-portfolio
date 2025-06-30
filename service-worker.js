const CACHE_NAME = "sanoof-portfolio-cache-v2";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",

  // Bootstrap
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",

  // Font Awesome & Remix Icon CDN
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css",
  "https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.css",

  // SweetAlert2
  "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.0/dist/sweetalert2.min.css",
  "https://cdn.jsdelivr.net/npm/sweetalert2@11.7.0/dist/sweetalert2.all.min.js",

  // Images
  "./assets/newSanoof_1.jpg",
  "./assets/plashoe.png",
  "./assets/Adotzee.png",
  "./assets/portfolio1.png",
  "./assets/shoe-old.png",
  "./assets/clonepic.png",
  "./assets/KEMHS.jpeg",
  "./assets/GHSS3.png",
  "./assets/kinfra.png",
  "./assets/mediConnect.png",
  "./assets/bg-sec.png",

  // Icons
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/favicon-16x16.png",
  "./assets/icons/favicon-32x32.png",
  "./assets/icons/apple-touch-icon.png",

  // Skill Icons
  "./assets/icons/icons8-react-native-480.png",
  "./assets/icons/icons8-redux-480.png",
  "./assets/icons/csharp.png",
  "./assets/icons/net.png",
  "./assets/icons/icons8-sql-96.png",
  "./assets/icons/EF.png",
  "./assets/icons/ADO-DOT-NET-Basics.jpg",
  "./assets/icons/DapperLogo.png",
  "./assets/icons/tailwind.png",
  "./assets/icons/vecteezy_javascript-logo-png-javascript-icon-transparent-png_27127463.png",
  "./assets/icons/icons8-css-logo-color/icons8-css-logo-480.png",
  "./assets/icons/icons8-html-logo-color/icons8-html-logo-480.png",

  // CV
  "./assets/Sanoof+Fullstack+Developer+(React+++.NET).pdf"
];

// INSTALL: Cache required files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        urlsToCache.map(url =>
          fetch(url).then(res => {
            if (!res.ok) throw new Error(`${url} failed`);
            return cache.put(url, res.clone());
          })
        )
      ).then(results => {
        results.forEach(result => {
          if (result.status === "rejected") {
            console.warn("Skipping:", result.reason);
          }
        });
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() =>
        new Response("You're offline and this resource is not cached.", {
          status: 503,
          statusText: "Offline"
        })
      );
    })
  );
});