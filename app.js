AOS.init();


  
function closeNav() {
  document.getElementById("myNav").style.width = "0";
}

// Close the navbar menu if the user clicks outside of it
document.addEventListener("click", function (event) {
  if (!event.target.matches('.nav-icon') && event.target.matches('.overlay')) {
      closeNav();
  }
});


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//Loading page
window.addEventListener('load', function () {
  const loader = document.getElementById('loader');
  loader.style.display = 'none';
});



















