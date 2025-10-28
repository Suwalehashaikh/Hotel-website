// ===== MOBILE NAV =====
const hamburger = document.createElement('button');
  hamburger.classList.add('hamburger');
  hamburger.innerHTML = '<span></span><span></span><span></span>';
  document.querySelector('nav').appendChild(hamburger);

  const rightSide = document.querySelector('.right-side');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    rightSide.classList.toggle('active');
  });
// HERO SLIDER JS
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000); // changes every 4s

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== AUTO YEAR =====
const years = ['year', 'year2', 'year3', 'year4', 'year5'];
years.forEach(id => {
  const el = document.getElementById(id);
  if (el) el.textContent = new Date().getFullYear();
});
