//import tabs from "../scripts/tabs.js";
import modal from "../scripts/modal.js";
import showNav from "../scripts/nav-burger.js";
import showSectionName from "../scripts/section-nav.js";
import showAnswers from "../scripts/accordion.js";
import phoneMask from "../scripts/phone-mask.js";



document.addEventListener("DOMContentLoaded", () => {

  [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
      img.removeAttribute('data-src');
    };
  });



  document.addEventListener('scroll', () => {
    showSectionName('section', '.nav-title');
  })


  //tabs();

  modal('.button', '.overlay', '.popup__close', '.tariff-name');
  showNav('.nav-burger', '.nav-bar');
  showAnswers();
  phoneMask();



});