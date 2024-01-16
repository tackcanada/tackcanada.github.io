/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBarResponse() {
    var x = document.getElementById("rightNav");
    if (x.className === "right-nav") {
      x.className += " responsive"; /* Adds the "responsive" class*/
    } else {
      x.className = "right-nav"; /* Removes the "responsive" class or keeps it if it already exists*/
    }
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