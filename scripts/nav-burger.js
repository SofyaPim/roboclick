function showNav(burger, nav){
  const btn = document.querySelector(burger),
    navBar = document.querySelector(nav);
  btn.addEventListener('click', () => {
    let l1 = btn.querySelector('.line1'),
      l2 = btn.querySelector('.line2'),
      l3 = btn.querySelector('.line3');
    l2.classList.toggle('displayNone');
    l1.classList.toggle('transform45deg');
    l3.classList.toggle('transformMin45deg');
    navBar.classList.toggle('transformTransX');



  })



}
export default showNav;
//showNav('.nav-burger', '.nav-bar');