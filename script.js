// NAVBAR SCROL

const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navEl.classList.add('navbar-scrolled');
  } else if (window.scrollY < 60) {
    navEl.classList.remove('navbar-scrolled');
  }
});

// NAVBAR SCROL
