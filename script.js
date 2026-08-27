// Burger menu toggle
const toggle = document.getElementById('menuToggle');
const menu   = document.getElementById('navMenu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('open');
});

// Close menu when a nav link is clicked
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
  });
});

// Rotate hero role text between the two hats she wears
const roles = ['Full-Stack Developer', 'Computer Engineering Student'];
const careerEl = document.getElementById('career');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (careerEl && !prefersReducedMotion) {
  let i = 0;
  setInterval(() => {
    i = (i + 1) % roles.length;
    careerEl.style.opacity = 0;
    setTimeout(() => {
      careerEl.textContent = roles[i];
      careerEl.style.opacity = 1;
    }, 250);
  }, 3200);
}