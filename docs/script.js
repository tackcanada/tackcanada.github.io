let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slides");
  const images = slides[0].getElementsByTagName("img");

  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > images.length) {
    slideIndex = 1;
  }
  images[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

showSlides(); // Initially start the slideshow