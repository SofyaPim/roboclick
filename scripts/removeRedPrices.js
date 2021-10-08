function removeRedPrices() {
    const priceTitle = document.querySelectorAll('.price-title');

    console.log('remove redPrice');

    priceTitle.forEach(card => {
        card.classList.remove('lineTrough');
        // let discountPrice = card.closest('.lowPrice');
        // console.log(discountPrice);
         card.style.opacity = 1;

        // if (discountPrice) {
        //     discountPrice.remove();
        // }
        try {
               card.previousElementSibling.remove();
               console.log(card.previousElementSibling);
        } catch (error) {
            console.log('discountPrice is gone')
        }
     

    })

}
export default removeRedPrices;