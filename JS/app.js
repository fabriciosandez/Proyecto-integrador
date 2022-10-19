//***** HAMBURGER MENU *****//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.getElementsByClassName("myMobileList")[0];

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

//***** CARRUSEL *****//

var swiper = new Swiper(".news-row-2 ", {
  spaceBetween: 25,

  loop: false,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  centeredSlides: true,
  effect: "cards",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 3,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    391: {
      slidesPerView: 4,
    },
    950: {
      slidesPerView: 4,
    },
  },
});
