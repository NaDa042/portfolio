// Burger menu toggle
const toggle = document.getElementById('menu-toggle');
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