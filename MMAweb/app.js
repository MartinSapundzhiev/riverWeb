const menuBtn = document.querySelector('.menu-btn');
const navlinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click',()=>{
 navlinks.classList.toggle('mobile-menu');
});


const elements = document.querySelectorAll('.slide-right, .slide-left, .slide-bottom')


function checkScroll() {
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const isVisible = elementTop - window.innerHeight < 0;
    
    if (isVisible) {
      element.classList.add('show');
    }
  });
}

window.addEventListener('scroll', checkScroll);