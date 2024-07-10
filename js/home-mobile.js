// Seleciona todos os carrosséis na página
const carousels = document.querySelectorAll('.carousel');

// Para cada carrossel, define variáveis e eventos
carousels.forEach((carousel, index) => {
  const slides = carousel.querySelectorAll('.slide');
  const circles = carousel.querySelectorAll('.circle');
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    circles.forEach((circle, i) => {
      if (i === index) {
        circle.style.background = '#005594';
        circle.style.color = '#005594';
      } else {
        circle.style.background = '';
        circle.style.color = '';
      }
    });
  }

  carousel.querySelector('#prevButton').addEventListener('click', function() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  carousel.querySelector('#nextButton').addEventListener('click', function() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Mostra o slide inicial
  showSlide(currentSlide);
});
