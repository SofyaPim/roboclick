
     //import tabs from "../scripts/tabs.js";
    import modal from "../scripts/modal.js";
    import showNav from "../scripts/nav-burger.js";
    import showSectionName from "../scripts/section-nav.js";
    import showAnswers from "../scripts/accordion.js";

   

    document.addEventListener('scroll', () => {
        showSectionName('section', '.nav-title');
    })


  //tabs();

    modal('.button', '.overlay', '.popup__close', '.tariff-name');
    showNav('.nav-burger', '.nav-bar');
    showAnswers();
  



