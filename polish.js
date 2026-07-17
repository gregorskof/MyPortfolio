// Keeps the browser chrome color (mobile address bar, PWA title bar)
// in sync with the site's light/dark toggle.
(function () {
  var meta = document.getElementById('metaThemeColor');
  if (!meta || !('MutationObserver' in window)) return;
  var apply = function () {
    meta.setAttribute(
      'content',
      document.documentElement.dataset.theme === 'light' ? '#eaf1f4' : '#05080c'
    );
  };
  new MutationObserver(apply).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });
  apply();
})();
