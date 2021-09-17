function showStatistic(section) {

    let time = 1500;
    function runNum(num, elem, speed) {
        let l = document.querySelector(elem);
        let n = 0;
        let step = num / (time / speed);
        //  let t = Math.round(time/(num/step));
        let interval = setInterval(() => {
            n = n + step;
            if (n >= num) {
                l.innerHTML = num;
                clearInterval(interval);
                return;
            }
            l.innerHTML = Math.floor(n);
        }, speed)
    }



    document.addEventListener('scroll', () => {
        let pageItem = document.querySelector(section);
        let pageItemTop = pageItem.getBoundingClientRect().top;
        if (pageItemTop > 50 && pageItemTop < 160) {
            runNum(1000, '#clients', 70);
            runNum(80, '#traffic', 12);
            runNum = function () {}
            console.log('gotcha!');
        }
        console.log(`Верхняя граница элемента - ${pageItemTop}`);
    })




}
export default showStatistic;

//hints-numbers - 1param