import tabs from "../scripts/tabs.js";
import modal from "../scripts/modal.js";
import showNav from "../scripts/nav-burger.js";
import showSectionName from "../scripts/section-nav.js";
import showAnswers from "../scripts/accordion.js";
import phoneMask from "../scripts/phone-mask.js";
import forms from "../scripts/form.js";
import showStatistic from "./showStatistic.js";
import mySwiper from "./swiper.js";
import "./mapbasics.js";
import showDesk from "./showDesc.js";
import myLocalStorage from "./localStorage.js";

document.addEventListener("DOMContentLoaded", () => {

 showSectionName('section', '.nav-title');
  showNav('.nav-burger', '.nav-bar');
  modal('.button', '.overlay', '.popup__close', '.tariff-name');
  forms();
  phoneMask();
  tabs('.stage-header', '.stage-header__block', '.stage-content__block', 'active-header');
  showAnswers();
  showStatistic('#hints-numbers');
  mySwiper();
  showDesk('.support-items__card', '[data-desc]');

  myLocalStorage();
  console.log(new Date( +localStorage.getItem('day')));

}); 
 