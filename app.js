$('.img-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });




let mainMenu = document.querySelector(".menu");
let bodySelector = document.querySelector("body");
let mobileMenu = document.querySelector(".nav-mobile-menu");

mobileMenu.addEventListener("click", function () {
  mobileMenu.classList.toggle("active-menu");
  if(mobileMenu.classList.contains("active-menu")) {
      mainMenu.classList.add("active-menu");
      bodySelector.classList.add("body-selector");
  }
  else {
      mainMenu.classList.remove("active-menu");
      bodySelector.classList.remove("body-selector");
  }
});

