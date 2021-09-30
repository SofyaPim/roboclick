function showDesk(selectors, contentblock) {
    const items = document.querySelectorAll(selectors);

    function desktopEvents(el, content) {
        el.addEventListener('mouseover', () => {
       
            content.style.opacity = 1;
           })
           el.addEventListener('mouseout', () => {
         
            content.style.opacity = 0;
        })
    }
    function mobileEvents(el, content) {
        el.addEventListener('touchstart', () => {
       
            content.style.opacity = 1;
           })
           el.addEventListener('touchend', () => {
         
            content.style.opacity = 0;
        })
    }

    items.forEach(item => {

       let desc =  item.querySelector(contentblock);
 
    
    desc.style.opacity = 0;
    if (window.innerWidth < 1000) {
        mobileEvents(item, desc);
        
    }else {
        desktopEvents(item, desc);
    }
     
  

    })
}
export default showDesk;