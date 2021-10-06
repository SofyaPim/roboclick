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
import timer from "./timer.js";
import closeMsg from "./closeMessage.js";
import throwItems from "./throwItems.js";
import animateHeaders from "./animateHeaders.js";


document.addEventListener("DOMContentLoaded", () => {

  showSectionName('section', '.nav-title');
  showNav('.nav-burger', '.nav-bar');
  modal('.button', '.overlay', '.popup__close', '.tariff-name');
  forms();
  closeMsg('timer-wrapper', 'timer-btn');
  
    timer(); 
  
  //запускается заново
  phoneMask();
  tabs('.stage-header', '.stage-header__block', '.stage-content__block', 'active-header');
  showAnswers();
  showStatistic('#hints-numbers');
  mySwiper();
  showDesk('.support-items__card', '[data-desc]');
  throwItems('tech-support');
  animateHeaders();
// localStorage.clear();
// localStorage.setItem('day', Date.now() + 3600000);
//console.log(new Date(+localStorage.getItem('day')));
});