AOS.init();


  
 // Close the navbar menu if the user clicks outside of it
 document.addEventListener("click", function(event) {
    if (!event.target.matches('.nav-icon') && event.target.matches('.overlay')) {
      closeNav();
    }
  });






















