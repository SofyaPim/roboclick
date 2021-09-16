function showStatistic(section) {

    let time = 1000;
    let step = 10;

    function runNum(num, elem, step = 1) {

        let l = document.querySelector(elem);
        let n = 0;
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
            n = n + step;
            if (n === num) {
                clearInterval(interval);
            }

            l.innerHTML = n;
        }, t)
    }



    document.addEventListener('scroll', () => {
        let pageItem = document.querySelector(section);
        let pageItemTop = pageItem.getBoundingClientRect().top;
       // let pageItemBottom = pageItem.getBoundingClientRect().bottom;

        if (pageItemTop > 50 && pageItemTop < 160) {
            runNum(1000, '#clients', 10);
            runNum(80, '#traffic', 2);
            console.log('gotcha!');
        } 
         console.log(`Верхняя граница элемента - ${pageItemTop}`);
    })
    

     

}
export default showStatistic;

//hints-numbers - 1param