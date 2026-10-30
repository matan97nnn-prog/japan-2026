/**
 * Offline support for the trip site.
 *
 * - Pages (navigations): network first, fall back to the cached app shell —
 *   so new versions arrive when online and the site still opens with no signal.
 * - Same-origin files (JS, CSS, images, audio) and Google Fonts: served from
 *   cache when present, refreshed in the background.
 * - On activate we cache the app shell and the JS/CSS it references, so the
 *   whole plan is available offline after the first visit.
 * Map tiles and Google/weather APIs are left to the network.
 */
const CACHE = "japan-2026-v1";
const SCOPE = self.registration.scope; // e.g. https://…/japan-2026/

async function cacheShell() {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(SCOPE, { cache: "no-cache" });
    if (!res.ok) return;
    await cache.put(SCOPE, res.clone());
    const html = await res.text();
    const urls = [...html.matchAll(/(?:src|href)="([^"]+\.(?:js|css|webmanifest|png))"/g)].map(
      (m) => new URL(m[1], SCOPE).href
    );
    await Promise.all(
      urls.map((u) =>
        fetch(u)
          .then((r) => r.ok && cache.put(u, r))
          .catch(() => {})
      )
    );
  } catch {
    /* offline during install — try again next time */
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(cacheShell().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
      await self.clients.claim();
    })()
  );
});

function cacheable(url) {
  if (url.origin === self.location.origin) return true;
  return url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  if (req.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(req);
          const cache = await caches.open(CACHE);
          cache.put(SCOPE, res.clone());
          return res;
        } catch {
          return (await caches.match(SCOPE)) || Response.error();
        }
      })()
    );
    return;
  }

  if (!cacheable(url)) return;

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const hit = await cache.match(req);
      const refresh = fetch(req)
        .then((res) => {
          if (res.ok || res.type === "opaque") cache.put(req, res.clone());
          return res;
        })
        .catch(() => hit);
      return hit || refresh;
    })()
  );
});
