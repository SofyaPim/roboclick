function changePrices() {
    const timer = document.querySelector('.timer-wrapper'),
        priceTitle = document.querySelectorAll('.price-title');
    console.log('change');




    function setDiscountPrice() {
       
        priceTitle.forEach(card => {
            let price = card.innerHTML;
            let pattern = /\d+/g;
            price = price.match(pattern).join([]);
            let discountPrice = price - (price * 5) / 100;
            let lowPrice = document.createElement('h2');
            lowPrice.classList.add('lowPrice');
            let parent = card.parentNode;
            lowPrice.innerHTML = `${discountPrice}$`;
            parent.appendChild(lowPrice);
            //  console.log(lowPrice);
            card.classList.add('lineTrough');

        })


    };

   // setDiscountPrice();
    function removeDiscountPrice() {
        priceTitle.forEach(card => {
            card.classList.remove('lineTrough');


            let redPrice = card.nextElementSibling.nextElementSibling;
            //  console.log(redPrice);
            if (redPrice) {
                redPrice.remove();
            }


            console.log('redPrice doesnt exist');


        })
    }

    if (!timer.classList.contains('.visually-hidden')) {
       setDiscountPrice();
console.log('set red Price');

    } else if(timer.classList.contains('.visually-hidden')){
        removeDiscountPrice();
       // setInterval(removeDiscountPrice, 1000);
    }






}
export default changePrices;