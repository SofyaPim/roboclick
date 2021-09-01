function floatSearch() {
    let pos = 0;
    let elem = document.querySelector('.search');
    let frame = setInterval( animItem, 20);

    function animItem() {
        if(pos === 100 + '%'){
            clearInterval(frame);
        }else{
            pos = pos + 10;
            elem.style.top =  pos + '%';
            elem.style.left =  pos + '%';
        }
    }
    
}
//  в разработке