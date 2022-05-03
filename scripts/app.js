const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.navbar-links');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('active');
});
