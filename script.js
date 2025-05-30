// Parallax background
window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  const parallax = document.querySelector('.background-img');
  if (parallax) {
    parallax.style.transform = `translateY(${scrolled * 0.32}px) scale(1.03)`;
  }
});

// Microinteração: animação fade-in ao carregar
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = 1;
  });
});
