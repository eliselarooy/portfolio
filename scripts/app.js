const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    navLinks.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    navLinks.classList.remove('active');
    menuOpen = false;
  }
});
