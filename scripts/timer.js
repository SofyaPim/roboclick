

function timer() {


    const timer = document.querySelector('.timer-wrapper'),
       priceTitle = document.querySelectorAll('.price-title'),
        currentDay = +localStorage.getItem('day'),
          now = Date.now();
    let timeId;

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
            card.classList.add('lineTrough');

        })


    };

    function removeDiscountPrice() {
        priceTitle.forEach(card => {
            card.classList.remove('lineTrough');
            // let redPrice = card.nextElementSibling.nextElementSibling;
            // console.log(redPrice);
            // redPrice.remove();
        })
    }




    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }


    const runTimer = () => {
        const addZero = (num) => {
            if (num <= 9) {
                return '0' + num;
            } else {
                return num;
            }
        };

        let daysVal = document.querySelector('.timer-content__item.days .timer-content__item__numbers');
        let hoursVal = document.querySelector('.timer-content__item.hours .timer-content__item__numbers');
        let minutesVal = document.querySelector('.timer-content__item.minutes .timer-content__item__numbers');
        let secondsVal = document.querySelector('.timer-content__item.seconds .timer-content__item__numbers');
        let daysText = document.querySelector('.timer-content__item.days .timer-content__item__text');
        let hoursText = document.querySelector('.timer-content__item.hours .timer-content__item__text');
        let minutesText = document.querySelector('.timer-content__item.minutes .timer-content__item__text');
        let secondsText = document.querySelector('.timer-content__item.seconds .timer-content__item__text');
       
        // console.log(now);

        let timeLeft = currentDay - now;
        let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
        let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(timeLeft / 1000 / 60) % 60;
        let seconds = Math.floor(timeLeft / 1000) % 60;

        daysVal.textContent = addZero(days);
        hoursVal.textContent = addZero(hours);
        minutesVal.textContent = addZero(minutes);
        secondsVal.textContent = addZero(seconds);
     
        daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
        minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

        if (timeLeft <= 0) {

           
            timer.classList.add('visually-hidden');
            clearInterval(timeId);
           removeDiscountPrice();
        }

    }

     let left = currentDay - now;
    console.log(+localStorage.getItem('day') - Date.now()); //left
runTimer();

    if (left > 0) {
        
        timer.classList.remove('visually-hidden');
        setDiscountPrice();
        timeId = setInterval(runTimer, 1000);


    } else  {
      
        timer.classList.add('visually-hidden');
        clearInterval(timeId);
       removeDiscountPrice();
    }


}
export default timer;