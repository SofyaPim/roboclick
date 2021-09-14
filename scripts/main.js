import tabs from "../scripts/tabs.js";
import modal from "../scripts/modal.js";
import showNav from "../scripts/nav-burger.js";
import showSectionName from "../scripts/section-nav.js";
import showAnswers from "../scripts/accordion.js";
import phoneMask from "../scripts/phone-mask.js";
import forms from "../scripts/form.js";

import "./mapbasics.js";
import "./swiper-bundle.min.js";

document.addEventListener("DOMContentLoaded", () => {


 showSectionName('section', '.nav-title');
  showNav('.nav-burger', '.nav-bar');
  modal('.button', '.overlay', '.popup__close', '.tariff-name');
  forms();
  phoneMask();
  tabs('.stage-header', '.stage-header__block', '.stage-content__block', 'active-header');
  showAnswers();
 

  const swiper = new Swiper(".pricesSwiper", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    breakpoints: {


      640: {
        slidesPerView: 2.1,
        spaceBetween: 40
      },
      480: {
        slidesPerView: 1.7,
        spaceBetween: 40
      }
    },

    initialSlide: 2,
    centeredSlides: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  })





}); 
// document.addEventListener('scroll', () => {
   
//   });