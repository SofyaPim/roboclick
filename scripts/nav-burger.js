//function showNav(e,t){const s=document.querySelector(e),r=document.querySelector("header"),o=document.querySelector(t);let a=s.querySelector(".line1"),n=s.querySelector(".line2"),l=s.querySelector(".line3");document.addEventListener("click",e=>{e.target===s||e.target===r?(n.classList.toggle("displayNone"),a.classList.toggle("transform45deg"),l.classList.toggle("transformMin45deg"),o.classList.toggle("transformTransX")):e.target!=o&&e.target!=r&&o.classList.contains("transformTransX")&&(o.classList.remove("transformTransX"),n.classList.remove("displayNone"),a.classList.remove("transform45deg"),l.classList.remove("transformMin45deg"))})}export default showNav;

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
         document.body.style.overflow = ''; 
        navBar.classList.remove('transformTransX');
        l2.classList.remove('displayNone');
        l1.classList.remove('transform45deg');
        l3.classList.remove('transformMin45deg');
        

      }
    }


  })



}
export default showNav;
