function animateHeaders() {
    let animateItems = document.querySelectorAll('.animated');

    window.addEventListener('scroll', () => {
        animateItems.forEach(item => {
           
            let parent = item.parentNode;
            let parentTop = parent.getBoundingClientRect().top;
//console.log(animateItems[3].parentNode.getBoundingClientRect().top);
//console.log(animateItems[3]);
            if ( parentTop > 70 && parentTop < 200 ) {
               setTimeout(() => {
                   item.classList.remove('translate');
               }, 100)
                    
              

            }

        })
    })

}
export default animateHeaders;