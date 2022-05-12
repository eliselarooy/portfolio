const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.navbar-links');
const toTop = document.querySelector('.to-top');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  navLinks.classList.toggle('active');
});

window.onscroll = function () {
  if (window.scrollY >= 500) {
    toTop.style.opacity = '1';
  } else {
    toTop.style.opacity = '0';
  }
};
