let currentSlide = 0;

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }

  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  dots[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

function scrollToFamily() {
  document.getElementById("family").scrollIntoView({
    behavior: "smooth",
  });
}
