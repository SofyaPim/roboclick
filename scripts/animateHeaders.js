function animateHeaders() {
    let animateItems = document.querySelectorAll('.animated');

    window.addEventListener('scroll', () => {
        animateItems.forEach(item => {
           
            let parent = item.parentNode;
            let parentTop = parent.getBoundingClientRect().top;
//console.log(animateItems[3].parentNode.getBoundingClientRect().top);
            if ( parentTop < 400) {
               setTimeout(() => {
                   item.classList.remove('translate');
               }, 300)
                    
              

            }

        })
    })

}
export default animateHeaders;