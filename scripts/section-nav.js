document.addEventListener('scroll', () => {

  const showSectionName = (section, headerNav) => {
  let pageItem = document.querySelectorAll(section), //массив секций
    headerTitle = document.querySelector(headerNav), // контент заголовка в хедере
    headerLinks = document.querySelector('.nav-bar-links'), // панель навигации
    linksItem = headerLinks.children; // коллекция ссылок
    

  pageItem.forEach((item, ind) => {
    if (item.getBoundingClientRect().top < 50 && item.getBoundingClientRect().bottom > 50) {
      headerTitle.textContent = linksItem[ind].innerText;
    }
  });


}
 showSectionName('section', '.nav-title');

})


