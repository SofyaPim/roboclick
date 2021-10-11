function initLazyLoading(root){
    const lazyEls = [...root.querySelectorAll("[data-img]")];
    console.log(lazyEls);
  
    lazyEls.forEach((el) => {
      new IntersectionObserver(
        (entries) => {
        
          if (entries[0].isIntersecting) {
            const { src } = el.dataset;
            if (!src) return;
            if (!el.hasAttribute("src")) {
              el.setAttribute("src", src);
              el.removeAttribute("data-img");
            }
           
          } 
        },
        {
          threshold: 0.3
        }
      ).observe(el);
    });
  };
  export default initLazyLoading;
//   initLazyLoading(document.querySelector(".wrapper"));
  