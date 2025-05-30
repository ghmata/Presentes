// Parallax sutil na imagem de fundo
window.addEventListener('scroll', function() {
  const scrolled = window.scrollY;
  document.querySelector('.bg-image').style.transform = `translateY(${scrolled * 0.22}px)`;
});
