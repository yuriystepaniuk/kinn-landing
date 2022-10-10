$('.img-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });

let navMenu = document.querySelector('.menu');
let navMobileMenu = document.querySelector('.nav-mobile-menu');

navMenu.addEventListener("click", function() {
  navMenu.classList.toggle('active-menu');
  if(navMobileMenu.classList.contains('active-menu')) {
    navMenu.classList.add('active-menu');
  }
  else {
    navMenu.classList.remove('active-menu');
  }
});