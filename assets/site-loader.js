(() => {
  const showLoader = () => {
    const loader = document.createElement('div');
    loader.className = 'site-loader';
    loader.setAttribute('aria-hidden', 'true');
    loader.innerHTML = '<div class="loader-logo"><span>stay-in.co.uk</span></div>';
    document.body.prepend(loader);
    window.setTimeout(() => loader.classList.add('is-leaving'), 1250);
    window.setTimeout(() => loader.remove(), 1750);
  };
  if (document.body) showLoader();
  else document.addEventListener('DOMContentLoaded', showLoader, { once: true });
})();
