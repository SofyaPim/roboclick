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
import setRedPrices from "./setRedPrices.js";
import removeRedPrices from "./removeRedPrices.js";
//import timer from "./timer.js";

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


  if (+localStorage.getItem('day') - Date.now() < 0) {
    console.log(`разница ${+localStorage.getItem('day') - Date.now()}`);
    //  clearInterval(showTimer);


  } else {
    //  showTimer = setInterval(timer, 1000);
    setRedPrices();
  }
  let discountTime = -30000; //86 400 000 //24hours
  function clearLocalStorage() {
    if ((+localStorage.getItem('day') - Date.now()) < discountTime) {
      localStorage.clear();
    }
  }
  clearLocalStorage();
  // localStorage.clear();//test
  // removeRedPrices();//test
  // console.log(((+localStorage.getItem('day')) - Date.now()  )); //~Wed Oct 06 2021 18:45:16 GMT+0300 (Москва, стандартное время)
  //console.log(((+localStorage.getItem('day')) - Date.now()));
  // console.log(new Date (+localStorage.getItem('day')).toLocaleString());

});