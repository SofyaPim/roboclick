function animateHeaders (){
    let animateItems = document.querySelectorAll('.animated');
    animateItems.forEach( item => {
        item.classList.add('animated');
    })

}
export default animateHeaders;