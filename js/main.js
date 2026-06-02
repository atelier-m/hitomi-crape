// ハンバーガーメニュー
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const overlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.site-nav a');

if (menuToggle && siteNav && overlay) {

  menuToggle.addEventListener('click', function () {
    const isOpen = menuToggle.classList.toggle('is-open');
    siteNav.classList.toggle('is-open', isOpen);
    overlay.classList.toggle('is-open', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
  });

  overlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });

  function closeMenu(){
    menuToggle.classList.remove('is-open');
    siteNav.classList.remove('is-open');
    overlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
  }
}

// ヘッダースクロール変化
const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  const trigger = hero.offsetHeight - 80;

  if(window.scrollY > trigger){
    header.classList.add('is-scrolled');
  } else {
    header.classList.remove('is-scrolled');
  }
});