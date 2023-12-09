let slideIndex = 0;

// Function to display slides
function showSlides() {
  let i;
  const slides = document.getElementsByClassName("slides");
  const images = slides[0].getElementsByTagName("img");

  // Hide all images
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }

  // Increment slide index and display the next image
  slideIndex++;
  if (slideIndex > images.length) {
    slideIndex = 1;
  }
  images[slideIndex - 1].style.display = "block";

  // Change image every 2 seconds (adjust as needed)
  setTimeout(showSlides, 2000);
}

// Function to change slides when clicking next/previous buttons
function changeSlide(n) {
  slideIndex += n;
  showSlides();
}

// Initially start the slideshow
showSlides();
