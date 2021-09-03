function showAnswers() {

let accordion = document.querySelector('.accordion');
let items = accordion.querySelectorAll('.accordion__item');
let title = accordion.querySelectorAll('.faq-item');

function toggleAccordion() {
    let thisItem = this.parentNode;


    items.forEach(item => {
        if (thisItem == item) {
           
            thisItem.classList.toggle('active');
            return;
        }
      
        item.classList.remove('active');
    });
}

title.forEach(question => question.addEventListener('click', toggleAccordion));

    
}


 export default showAnswers;




