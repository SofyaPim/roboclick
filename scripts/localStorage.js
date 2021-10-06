function myLocalStorage() {

    //const btn = document.getElementById('date'); btns = document.querySelectorAll('[data-discount]')
    const submitBtns = document.querySelectorAll('[type="submit"]'),
        timer = document.querySelector('.timer-wrapper'),
        discountInput = document.getElementById('discountInput'),

        priceTitle = document.querySelectorAll('.price-title');

    let timeId;


    function setDiscountPrice() {
        priceTitle.forEach(card => {


            let price = card.innerHTML;
            let pattern = /\d+/g;
            price = price.match(pattern).join([]);
            let discountPrice = price - (price * 5) / 100;
            // card.innerHTML = `${discountPrice}$`;//
            let lowPrice = document.createElement('h2');
            lowPrice.classList.add('lowPrice');
            let parent = card.parentNode;
            lowPrice.innerHTML = `${discountPrice}$`;
            parent.appendChild(lowPrice);
            card.classList.add('lineTrough');



        })


    }

    function removeDiscountPrice() {
        priceTitle.forEach(card => {
            card.classList.remove('lineTrough');
            let redPrice = card.nextElementSibling.nextElementSibling;
            redPrice.remove();
        })
    }


    timer.classList.add('visually-hidden');

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

        let now = Date.now();
        let currentDay;



        if (localStorage.getItem('day')) {
            currentDay = localStorage.getItem('day');
            console.log(`day in Storage ${currentDay}`);
        } else {
            currentDay = Date.now() + 2000;
            //  currentDay = Date.now() + (3600000 * 24);
            localStorage.setItem('day', currentDay.toString());
            // localStorage.clear();
            console.log(`set day  ${currentDay}`);
        }
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


        if (timeLeft >= 0) {

            timer.classList.remove('visually-hidden');



        } else if (timeLeft <= 0) {

            localStorage.clear();
            daysVal.textContent = "00";
            hoursVal.textContent = "00";
            minutesVal.textContent = "00";
            secondsVal.textContent = "00";
            timer.classList.add('visually-hidden');
            clearInterval(timeId);
            removeDiscountPrice();



        }



    }
    submitBtns.forEach(btn => {
        btn.addEventListener('click', () => {

            runTimer();
            setDiscountPrice();
            timeId = setInterval(runTimer, 1000);
            timer.classList.remove('visually-hidden');
            let localDay = new Date(+localStorage.getItem('day'));
            console.log(`localDay ${localDay}`);
            let realTime = localDay.toString().slice(7, 24);
            discountInput.value = realTime;
            console.log(realTime);

        });
    });

    if (localStorage.getItem('day')) {

        setDiscountPrice();
        timeId = setInterval(runTimer, 1000);

    }


}
export default myLocalStorage;