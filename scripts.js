const navToggle = document.querySelector('.nav__toggle');
const navLinks = document.querySelector('.nav__links');
const navItems = document.querySelectorAll('.nav__links a');

const toggleNav = () => {
  if (!navLinks || !navToggle) {
    return;
  }

  const isOpen = navLinks.classList.toggle('nav__links--open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
};

if (navToggle) {
  navToggle.addEventListener('click', toggleNav);
}

navItems.forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('nav__links--open')) {
      navLinks.classList.remove('nav__links--open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}