/* تثبيت رواق مداد كتطبيق: تسجيل الـ Service Worker + زر التحميل في أسفل الموقع */
(function () {
  'use strict';

  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    });
  }

  var btn = document.getElementById('pwa-install');
  var dlg = document.getElementById('pwa-dialog');
  if (!btn || !dlg) return;

  // مثبَّت بالفعل ويعمل كتطبيق؟ لا حاجة للزر
  var standalone = (window.matchMedia && matchMedia('(display-mode: standalone)').matches) || navigator.standalone === true;
  if (standalone) return;

  var ua = navigator.userAgent || '';
  var isIOS = /iphone|ipad|ipod/i.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isMobile = isIOS || /android|mobile/i.test(ua);
  var inApp = /FBAN|FBAV|Instagram|TikTok|musical_ly|Snapchat|Line\/|Twitter|; wv\)/i.test(ua);
  var deferred = null;

  function show() { btn.hidden = false; }
  function hide() { btn.hidden = true; }

  if (isMobile) show();   // على الهاتف يظهر الزر دائمًا (مع إرشادات إن لم يتوفر التثبيت المباشر)

  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    show();
  });
  window.addEventListener('appinstalled', function () { deferred = null; hide(); });

  function openDialog() {
    var which = inApp ? 'inapp' : (isIOS ? 'ios' : 'android');
    ['inapp', 'ios', 'android'].forEach(function (k) {
      var p = dlg.querySelector('[data-pwa="' + k + '"]');
      if (p) p.hidden = (k !== which);
    });
    if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
  }
  function closeDialog() {
    if (typeof dlg.close === 'function') dlg.close(); else dlg.removeAttribute('open');
  }

  btn.addEventListener('click', function () {
    if (deferred) {
      var p = deferred;
      deferred = null;
      p.prompt();
      p.userChoice.then(function (c) { if (c && c.outcome === 'accepted') hide(); }).catch(function () {});
    } else {
      openDialog();
    }
  });

  dlg.addEventListener('click', function (e) { if (e.target === dlg) closeDialog(); }); // النقر على الخلفية
  var x = dlg.querySelector('[data-pwa-close]');
  if (x) x.addEventListener('click', closeDialog);
})();
