let slideIndex = 0;
const slides = document.querySelector(".slides");

function showSlides() {
  const images = slides.getElementsByTagName("img");

  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > images.length) {
    slideIndex = 1;
  }

  // Slide animation by changing the transform property
  slides.style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;

  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

showSlides(); // Initially start the slideshow
