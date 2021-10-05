function animateHeaders() {
    let animateItems = document.querySelectorAll('.animated');

    window.addEventListener('scroll', () => {
        animateItems.forEach(item => {
           
            let parent = item.parentNode;
            let parentTop = parent.getBoundingClientRect().top;
console.log(animateItems[3].parentNode.getBoundingClientRect().top);
            if ( parentTop < 400) {
               
                    item.classList.remove('translate');
              

            }

        })
    })

}
export default animateHeaders;