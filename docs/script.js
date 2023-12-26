/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("rightNav");
    if (x.className === "right-nav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/* Slideshow script */
let slideIndex = 1; /* Slide counter */
showSlides(slideIndex);

function plusSlides(n) { /* Manual switch slides */
  showSlides(slideIndex += n);
}

function showSlides(n) { /* How the slides will be displayed/manipulated */
  let i;
  const slides = document.getElementsByClassName("slide"); /* slides constant */
  const buttons = document.getElementsByClassName("slide-button"); /* buttons constant */
  
  if (n > slides.length) { slideIndex = 1; } /* Loops the slides if user goes forward too much */
  if (n < 1) { slideIndex = slides.length; } /* Loops the slides if user goes backward too much */
  
  for (i = 0; i < slides.length; i++) { /* Hide all the slides by default */
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < buttons.length; i++) { /* Display only the slide instructed by slideIndex variable */
    buttons[i].classList.remove("active");
  }
  
  slides[slideIndex - 1].style.display = "block"; 
  buttons[slideIndex - 1].classList.add("active");
}

function slideButtonClick(n) {
  showSlides(slideIndex = n);
}
