document.addEventListener('scroll', () => {

  const showSectionName = (section, headerNav) => {
    let pageItem = document.querySelectorAll(section), //массив секций
      headerTitle = document.querySelector(headerNav), // контент заголовка в хедере
      headerLinks = document.querySelector('.nav-bar-links'), // панель навигации
      navBar = document.querySelector('.nav-bar'),
      linksItem = headerLinks.children, // коллекция ссылок
      l1 = document.querySelector('.line1'),
      l2 = document.querySelector('.line2'),
      l3 = document.querySelector('.line3');


   // console.log(linksItem[0]);
   // console.log(linksItem[1]);
    
    pageItem.forEach((item, ind) => {
      if (item.getBoundingClientRect().top < 50 && item.getBoundingClientRect().bottom > 50) {
        headerTitle.textContent = linksItem[ind].innerText;


        navBar.classList.remove('transformTransX');

      }
    });
    if (!navBar.classList.contains('transformTransX')) {
      l2.classList.remove('displayNone');
      l1.classList.remove('transform45deg');
      l3.classList.remove('transformMin45deg');
    }



  }
  showSectionName('section', '.nav-title');

})