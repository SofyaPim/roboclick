function setRedPrices() {
    const priceTitle = document.querySelectorAll('.price-title');

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
        card.style.opacity = .4;
        card.classList.add('lineTrough');

    })



}
export default setRedPrices;