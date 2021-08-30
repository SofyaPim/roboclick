let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion__item');
let title = accordion.querySelectorAll('.faq-item');

function toggleAccordion() {
    let thisItem = this.parentNode;
  //  console.log(thisItem);

    items.forEach(item => {
        if (thisItem == item) {
            // if this item is equal to the clicked item, open it.
            thisItem.classList.toggle('active');
            return;
        }
        // otherwise, remove the open class
        item.classList.remove('active');
    });
}

title.forEach(question => question.addEventListener('click', toggleAccordion));





// const getAnswers = (triggerSelector, contentselector) => {
//     const questBlocks = document.querySelectorAll(triggerSelector),
//         answBlocks = document.querySelectorAll(contentselector);

//     answBlocks.forEach(block => {
//         block.classList.add('animated', 'fadeInDown'); //1version

//     })
//     questBlocks.forEach(btn => {
//         btn.addEventListener('click', function (e) {
// if (!this.classList.contains('active')) {
//    questBlocks.forEach(btn => {
//         btn.classList.remove('active');


//     });

//    this.classList.add('active');

//     // btn.closest('.answer-item').style.display = 'block';//2 version


// }

// answBlocks.forEach(item => {

//     item.style.display = 'none';




// })
// let answ =  document.querySelectorAll('.answer-item');

//              btn.nextElementSibling.classList.toggle('displayNone');


//             answ.forEach(item => {

//                 if(item.previousElementSibling !== e.target){
//  console.log(item.previousElementSibling);

//                         item.classList.add('displayNone');
//                 }

//             })


// if (answ.style.display !== 'block') {

//     answ.style.display = 'block';
// } else answ.style.display = 'none';

//         });
//     });



// }
// getAnswers('.faq-item', '.answer-item');