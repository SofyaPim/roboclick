function animateHeaders() {
    let animateItems = document.querySelectorAll('.animated');

    window.addEventListener('scroll', () => {
        animateItems.forEach(item => {

            let parent = item.parentNode;
            let parentTop = parent.getBoundingClientRect().top;
            if (parentTop < 600) {

                setTimeout(() => {
                    item.classList.remove('translate');

                }, 200)
                setTimeout(() => {
                    item.classList.remove('opacity');
                }, 100)

                //item.classList.remove('opacity');

            }

        })
    })

}
export default animateHeaders;