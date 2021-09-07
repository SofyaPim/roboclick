function showNav(burger, nav) {
  const btn = document.querySelector(burger),
    header = document.querySelector('header'),
    navBar = document.querySelector(nav);
  let l1 = btn.querySelector('.line1'),
    l2 = btn.querySelector('.line2'),
    l3 = btn.querySelector('.line3');


  document.addEventListener('click', (e) => {

    if (e.target === btn || e.target === header) {
      l2.classList.toggle('displayNone');
      l1.classList.toggle('transform45deg');
      l3.classList.toggle('transformMin45deg');
      navBar.classList.toggle('transformTransX');

    }else if (e.target != navBar && e.target != header) {
      if (navBar.classList.contains('transformTransX')) {
        console.log('hi');
        navBar.classList.remove('transformTransX');
        l2.classList.remove('displayNone');
        l1.classList.remove('transform45deg');
        l3.classList.remove('transformMin45deg')
      }
    }


  })



}
export default showNav;
//showNav('.nav-burger', '.nav-bar');