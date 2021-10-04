function myLocalStorage() {

    const btn = document.getElementById('date');
    const timer = document.querySelector('.timer-wrapper');
    timer.classList.add('visually-hidden');
    //склонение сущ-ных
    function declOfNum(number, titles) {
        let cases = [2, 0, 1, 1, 1, 2];
        return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    }



    btn.addEventListener('click', () => {
        //current time
        // let currentDay = Date.now() + (3600000 * 24);
        //test
        let currentDay = Date.now() + 5000;
        localStorage.setItem('day', currentDay.toString());

    })

    window.addEventListener('DOMContentLoaded', () => {
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
            let currentDay = localStorage.getItem('day');
            let timeLeft = currentDay - now;

            let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
            let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
            let minutes = Math.floor(timeLeft / 1000 / 60) % 60;
            let seconds = Math.floor(timeLeft / 1000) % 60;

            console.log(`Текущее время ${now}`);
            console.log(`время до выключения ${timeLeft} `);
            console.log(`время currentDay  ${currentDay} `);

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

                console.log(seconds);
                console.log(minutes);
                console.log(days);
                console.log(hours);



            } else if (timeLeft <= 0) {

                localStorage.clear();
                daysVal.textContent = "00";
                hoursVal.textContent = "00";
                minutesVal.textContent = "00";
                secondsVal.textContent = "00";
                timer.classList.add('visually-hidden');
                // clearInterval(runTimer);
                console.log(seconds);
                console.log(minutes);
                console.log(days);
                console.log(hours);

            }


        }
        



        if (localStorage.getItem('day')) {

            runTimer();
            setInterval(runTimer, 1000);

        } //else {
            //clearInterval(runTimer);
            //console.log('LocalStorage is empty');
        //}


        

    })







}
export default myLocalStorage;