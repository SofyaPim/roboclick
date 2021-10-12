function animateHeaders() {

    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.querySelectorAll('.animated')) {
                    let headers = entry.target.querySelectorAll('.animated');
                    headers.forEach(el => {
                        el.classList.remove('translate');
                        el.classList.remove('opacity');
                    })
                }
            }
        })

    }, {
        threshold: .25
    })
    document.querySelectorAll('section').forEach(item => {
        observer.observe(item)
    })

}
export default animateHeaders;