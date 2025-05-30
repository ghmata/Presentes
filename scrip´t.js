// Parallax effect
window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  const parallax = document.querySelector('.parallax-bg');
  if (parallax) {
    parallax.style.transform = 'translateY(' + scrolled * 0.28 + 'px)';
  }
});
