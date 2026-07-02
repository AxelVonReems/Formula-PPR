// Menu folding/unfolding
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');

if (hamburger && navList) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');

    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
  });
}