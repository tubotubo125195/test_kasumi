self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "./",
        "./test_kasumi.html"
      ]);
    })
  );
});

if (event.request.mode === "navigate") {
    event.respondWith(
        fetch(event.request, { cache: "no-store" })
            .catch(() => caches.match(event.request))
    );
}
