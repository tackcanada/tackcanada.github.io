  /* Open and close the sliding nav */
  function openNav() {
    document.querySelector('.sliding-nav').style.width = '250px';
  }
  
  function closeNav() {
    document.querySelector('.sliding-nav').style.width = '0';
  }

/* Slideshow mechanics */
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }

/* Image grid mechanics */
const images = document.querySelectorAll('.image-grid img');
const modalOverlay = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const modalHeading = document.getElementById('modalHeading'); // New heading element
const captionText = document.getElementById('caption');

// Array of captions corresponding to each image
const captions = [
  'Youth4Change Fair Ottawa 2019',
  'Seniors of Canada Celebration Day',
  'Earth Day x TACK Canada 2020',
  'Youth Ambassadors TACK Canada 2021',
  'TACK Canada Music Tour 2022',
  'Annual TACK Conference 2023',
];

images.forEach((image, index) => {
  image.addEventListener('click', () => {
    // Show the modal overlay
    modalOverlay.style.display = 'block';

    // Set the clicked image and heading as the content of the modal
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalHeading.innerHTML = captions[index]; // Update the heading
    captionText.innerHTML = captions[index];
  });
});

// Function to close the modal overlay
function closeModal() {
  modalOverlay.style.display = 'none';
}