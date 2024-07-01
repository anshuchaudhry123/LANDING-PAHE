
// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
  // Initially hide the navbar after 2 seconds
  setTimeout(function() {
    document.querySelector('nav').classList.add('nav-hidden');
  }, 2000);
  
  // Show the navbar when hovering over the top of the page
  window.addEventListener('scroll', function() {
    if (window.scrollY <= 0) {
      document.querySelector('nav').classList.remove('nav-hidden');
    }
  });
});
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".container .letter-s", {
    duration: 1000,
    delay: 1000,
  });
  ScrollReveal().reveal(".container img", {
    duration: 1000,
    delay: 1500,
  });
  ScrollReveal().reveal(".container .text__left", {
    ...scrollRevealOption,
    origin: "right",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .text__right", {
    ...scrollRevealOption,
    origin: "left",
    delay: 2000,
  });
  ScrollReveal().reveal(".container .explore", {
    duration: 1000,
    delay: 2500,
  });
  ScrollReveal().reveal(".container h5", {
    duration: 1000,
    interval: 500,
    delay: 3000,
  });
  ScrollReveal().reveal(".container .catalog", {
    duration: 1000,
    delay: 5000,
  });
  ScrollReveal().reveal(".container .print", {
    duration: 1000,
    delay: 5500,
  });
  ScrollReveal().reveal(".footer p", {
    duration: 1000,
    delay: 7000,
  });

    document.addEventListener("DOMContentLoaded", function () {
      const nav = document.querySelector("nav");
  
      document.addEventListener("mousemove", function (e) {
        if (e.clientY <= 50) { // Adjust the value to change the hover area
          nav.classList.add("visible");
        } else {
          nav.classList.remove("visible");
        }
      });
    });
  
   