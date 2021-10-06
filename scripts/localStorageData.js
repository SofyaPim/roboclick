function localStorageData (){

let currentDay;

//

    if (localStorage.getItem('day')) {
        currentDay = localStorage.getItem('day');
        console.log(`day in Storage ${currentDay}`);
      
    } else {
       currentDay = Date.now() + 50000;
    // currentDay = Date.now() + (3600000 * 24);
        localStorage.setItem('day', currentDay.toString());
         
        console.log(`set day  ${currentDay}`);
    }

    return currentDay;

}
export default localStorageData;