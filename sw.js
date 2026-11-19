/* Service Worker — رواق مداد
   - الصفحات والأكواد: الشبكة أولًا (ليصل كل تحديث فورًا) مع الرجوع للنسخة المحفوظة عند ضعف الاتصال أو انقطاعه.
   - الصور والخطوط: المحفوظ أولًا للسرعة.
   - ملفات PDF والمصادر الكبيرة لا تُحفظ تلقائيًا.
   عند تغيير أي ملف مهم غيّر رقم VERSION ليُنظَّف المخزن القديم. */
var VERSION = 'midad-v13';
var SHELL = [
  './', 'index.html', 'install.html', 'style.css', 'script.js', 'pwa.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png',
  'assets/favicon.png', 'assets/wordmark-light.webp', 'assets/wordmark-dark.webp',
  'assets/fonts/Amiri-Regular.woff', 'assets/fonts/Amiri-Bold.woff', 'assets/fonts/Amiri-Italic.woff'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(VERSION).then(function (c) {
      return Promise.all(SHELL.map(function (u) { return c.add(u).catch(function () {}); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function networkFirst(req, isNav) {
  return new Promise(function (resolve) {
    var done = false;
    var fallback = function () {
      return caches.match(req, { ignoreSearch: true }).then(function (r) {
        return r || (isNav ? caches.match('index.html') : undefined);
      });
    };
    // اتصال بطيء جدًا؟ بعد 4 ثوانٍ نعرض النسخة المحفوظة إن وُجدت
    var t = setTimeout(function () {
      fallback().then(function (r) { if (r && !done) { done = true; resolve(r); } });
    }, 4000);
    fetch(req.url, { cache: 'no-cache', credentials: 'same-origin' }).then(function (res) {
      clearTimeout(t);
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copy); });
      }
      if (!done) { done = true; resolve(res); }
    }).catch(function () {
      clearTimeout(t);
      fallback().then(function (r) { if (!done) { done = true; resolve(r || Response.error()); } });
    });
  });
}

function cacheFirst(req) {
  return caches.match(req).then(function (hit) {
    if (hit) return hit;
    return fetch(req).then(function (res) {
      if (res && res.ok && res.status === 200) {
        var copy = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copy); });
      }
      return res;
    });
  });
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET' || req.headers.has('range')) return;
  var url = new URL(req.url);
  if (url.origin !== self.location.origin) return;               // خطوط جوجل وغيرها: للمتصفح
  if (/\.(pdf|af)$/i.test(url.pathname)) return;                  // ملفات كبيرة: لا تُحفظ
  if (url.pathname.indexOf('/assets/learn/source/') !== -1) return;

  var isNav = req.mode === 'navigate';
  var isCode = isNav || /\.(html|css|js|webmanifest)$/i.test(url.pathname) || url.pathname.slice(-1) === '/';
  e.respondWith(isCode ? networkFirst(req, isNav) : cacheFirst(req));
});
