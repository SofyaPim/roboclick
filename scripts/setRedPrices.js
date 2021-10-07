function setRedPrices() {
    const   priceTitle = document.querySelectorAll('.price-title');


console.log('set red Price');


   
       
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
            card.style.opacity = .7;
            card.classList.add('lineTrough');

        })


    

   
//     function removeDiscountPrice() {
//         priceTitle.forEach(card => {
//             card.classList.remove('lineTrough');

//             card.style.opacity = 1;
//             let redPrice = card.nextElementSibling.nextElementSibling;
         
//             if (redPrice) {
//                 redPrice.remove();
//             }


//             console.log('redPrice doesnt exist');


//         })
//     }

//     if (!timer.classList.contains('visually-hidden')) {
//        setDiscountPrice();
// 

//     } else if(timer.classList.contains('visually-hidden')){
//        removeDiscountPrice();
//        console.log('remove redPrice');
//       //  setInterval(removeDiscountPrice, 1000);
//     }






}
export default setRedPrices;