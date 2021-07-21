var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)

window.onscroll = function() {scrollFunction()};



const element = document.querySelector('.mainlogo');
element.classList.add('animate__animated', 'animate__backInDown');






















