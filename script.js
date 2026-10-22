// ===== КАРТИНКИ ДЛЯ ГАЛЕРЕИ =====
// Загрузите картинки в папку assets/ и впишите пути сюда, например:
// const IMAGES = ['assets/1.webp', 'assets/2.webp', 'assets/3.webp'];
// Пока список пуст, показываются серые заглушки.
const IMAGES = ['assets/1.webp', 'assets/2.webp', 'assets/3.webp', 'assets/4.webp', 'assets/5.webp'];

// ===== страницы =====
const pages = document.querySelectorAll('[data-page]');
const links = document.querySelectorAll('.strip a');

function route() {
  const path = location.hash.slice(1) || '/';
  let found = false;
  pages.forEach(p => {
    const on = p.dataset.page === path;
    p.hidden = !on;
    found = found || on;
  });
  if (!found) pages[0].hidden = false;
  links.forEach(a => {
    if (a.getAttribute('href') === '#' + path) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  window.scrollTo(0, 0);
}
addEventListener('hashchange', route);
route();

// ===== галерея: список дважды, чтобы движение не прерывалось =====
const track = document.getElementById('track');
const count = IMAGES.length || 6;
for (let round = 0; round < 2; round++) {
  for (let i = 0; i < count; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    if (IMAGES.length) {
      const img = document.createElement('img');
      img.src = IMAGES[i];
      img.alt = '';
      tile.appendChild(img);
    }
    track.appendChild(tile);
  }
}

// ===== «узнать подробно» прокручивает к кнопкам =====
document.getElementById('more').addEventListener('click', () => {
  document.getElementById('choose').scrollIntoView({ behavior: 'smooth', block: 'center' });
});
