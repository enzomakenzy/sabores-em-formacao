const slides = document.querySelectorAll(".slide");
const circles = document.querySelectorAll(".circle");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
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

document.getElementById("prevButton").addEventListener("click", function() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.getElementById("nextButton").addEventListener("click", function() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

    
showSlide(currentSlide);