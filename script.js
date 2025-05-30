// Parallax suave na imagem de fundo ao rolar
window.addEventListener('scroll', function() {
  const heroImg = document.querySelector('.hero-img');
  if (!heroImg) return;
  let scrollY = window.scrollY;
  heroImg.style.transform = `translateY(${scrollY * 0.18}px) scale(1.01)`;
});
