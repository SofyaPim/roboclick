

let selector = document.querySelectorAll("input[type='tel']");
selector.forEach( item => {
    let im = new Inputmask("+7(999)999-99-99",);
    im.mask(item);
})



//{ "clearIncomplete": true }