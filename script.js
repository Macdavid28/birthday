let currentIndex = 0;

function changeSlide(direction) {
  const slides = document.querySelectorAll(".carousel-container img");
  const totalSlides = slides.length;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  const offset = currentIndex * -100;
  document.querySelector(
    ".carousel-container"
  ).style.transform = `translateX(${offset}%)`;
}
