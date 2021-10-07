function removeRedPrices() {
    const   priceTitle = document.querySelectorAll('.price-title'); 
    console.log('remove redPrice');

        priceTitle.forEach(card => {
            card.classList.remove('lineTrough');

            card.style.opacity = 1;
            let redPrice = card.nextElementSibling.nextElementSibling;
         
            if (redPrice) {
                redPrice.remove();
            }


          //  console.log('redPrice doesnt exist');


        })
    



    
}
export default removeRedPrices;