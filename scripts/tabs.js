// function tabs(e,t,c,s){const a=document.querySelector(e),n=document.querySelectorAll(t),o=document.querySelectorAll(c);function l(){o.forEach(e=>{e.style.display="none"}),n.forEach(e=>{e.classList.remove(s)})}function r(e=0){o[e].style.display="block",o[e].classList.add("fadeIn"),n[e].classList.add(s)}l(),r(),a.addEventListener("click",e=>{const c=e.target;c&&(c.classList.contains(t.replace(/\./,""))||c.parentNode.classList.contains(t.replace(/\./,"")))&&n.forEach((e,t)=>{c!=e&&c.parentNode!=e||(l(),r(t))})})}export default tabs;

function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
    
        content.forEach(item => {
            item.style.display = 'none';

        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
            
        });
    }

    function showTabContent(i = 0) {

       
        content[i].style.display = 'block';
       
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}


 export default tabs;
//tabs('.stage-header', '.stage-header__block', '.stage-content__block','active-header');
