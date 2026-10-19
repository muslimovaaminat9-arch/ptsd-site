const pages = document.querySelectorAll('[data-page]');

function route() {
  const path = location.hash.slice(1) || '/';
  pages.forEach(p => p.hidden = p.dataset.page !== path);
}

addEventListener('hashchange', route);
route();
