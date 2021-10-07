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
        
        card.previousElementSibling.remove();
console.log(card.previousElementSibling);
    })

}
export default removeRedPrices;