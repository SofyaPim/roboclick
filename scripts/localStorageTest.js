function myLocalStorage() {

    const btn = document.getElementById('date');


    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }



    btn.addEventListener('click', () => {

        let currentDay = Date.now() + (3600000 * 24);
        localStorage.setItem('day', currentDay.toString());
        console.log(currentDay);
    })

    window.addEventListener('DOMContentLoaded', () => {
        const runTimer = () => {
            let daysVal = document.querySelector('.timer-content__item.days .timer-content__item__numbers');
            let hoursVal = document.querySelector('.timer-content__item.hours .timer-content__item__numbers');
            let minutesVal = document.querySelector('.timer-content__item.minutes .timer-content__item__numbers');
            let secondsVal = document.querySelector('.timer-content__item.seconds .timer-content__item__numbers');
            let daysText = document.querySelector('.timer-content__item.days .timer-content__item__text');
            let hoursText = document.querySelector('.timer-content__item.hours .timer-content__item__text');
            let minutesText = document.querySelector('.timer-content__item.minutes .timer-content__item__text');
            let secondsText = document.querySelector('.timer-content__item.seconds .timer-content__item__text');

            let now = new Date();
            let currentDay = localStorage.getItem('day');

            console.log(`Текущее время ${now}`);
            console.log(`Время в localStorage ${currentDay}`);

            let stopTime = currentDay - now;

            console.log(stopTime)

            let days = Math.floor(stopTime / 1000 / 60 / 60 / 24);
            let hours = Math.floor(stopTime / 1000 / 60 / 60) % 24;
            let minutes = Math.floor(stopTime / 1000 / 60) % 60;
            let seconds = Math.floor(stopTime / 1000) % 60;

            console.log(seconds);
            console.log(minutes);
            console.log(days);
            console.log(hours);

            daysVal.textContent = days;
            hoursVal.textContent = hours;
            minutesVal.textContent = minutes;
            secondsVal.textContent = seconds;

            daysText.textContent = declOfNum(days, ['день', 'дня', 'дней']);
            hoursText.textContent = declOfNum(hours, ['час', 'часа', 'часов']);
            minutesText.textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
            secondsText.textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

        }

        runTimer();
        setInterval(runTimer, 1000);

    })







}
export default myLocalStorage;