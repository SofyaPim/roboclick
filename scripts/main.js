import tabs from "../scripts/tabs.js";
import modal from "../scripts/modal.js";
import showNav from "../scripts/nav-burger.js";
import showSectionName from "../scripts/section-nav.js";
import showAnswers from "../scripts/accordion.js";
import phoneMask from "../scripts/phone-mask.js";
import forms from "../scripts/form.js";
import showStatistic from "./showStatistic.js";
import mySwiper from "./swiper.js";
// import "./mapbasics.js";
import showDesk from "./showDesc.js";
import timer from "./timer.js";
import closeMsg from "./closeMessage.js";
import throwItems from "./throwItems.js";
import animateHeaders from "./animateHeaders.js";
import initLazyLoading from "./interSectionObserver.js";


document.addEventListener("DOMContentLoaded", () => {

  showSectionName('section', '.nav-title');
  showNav('.nav-burger', '.nav-bar');
  modal('.button', '.overlay', '.popup__close', '.tariff-name');
  forms();
  closeMsg('timer-wrapper', 'timer-btn');
  phoneMask();
  tabs('.stage-header', '.stage-header__block', '.stage-content__block', 'active-header');
  showAnswers();
  showStatistic('#hints-numbers');
  mySwiper();
  showDesk('.support-items__card', '[data-desc]');
  throwItems('tech-support');
  animateHeaders();

  timer();
  initLazyLoading(document.querySelector(".wrapper"));

  let discountTime = -30000; //86 400 000 //24hours
  function clearLocalStorage() {
    if ((+localStorage.getItem('day') - Date.now()) < discountTime) {
      localStorage.clear();
     
    }
  }
  clearLocalStorage();
  // localStorage.clear();//test
 console.log(+localStorage.getItem('day') - Date.now());

});