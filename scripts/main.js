import tabs from "../scripts/tabs.js";
import modal from "../scripts/modal.js";
import showNav from "../scripts/nav-burger.js";
import showSectionName from "../scripts/section-nav.js";
import showAnswers from "../scripts/accordion.js";
import phoneMask from "../scripts/phone-mask.js";



document.addEventListener("DOMContentLoaded", () => {

 


  document.addEventListener('scroll', () => {
    showSectionName('section', '.nav-title');
  })


  tabs('.stage-header', '.stage-header__block', '.stage-content__block','active-header');

  modal('.button', '.overlay', '.popup__close', '.tariff-name');
  showNav('.nav-burger', '.nav-bar');
  showAnswers();
  phoneMask();



});