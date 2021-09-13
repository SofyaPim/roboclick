function showAnswers(){let e=document.querySelector(".accordion"),t=e.querySelectorAll(".accordion__item");function c(){let e=this.parentNode;t.forEach(t=>{e!=t?t.classList.remove("active"):e.classList.toggle("active")})}e.querySelectorAll(".faq-item").forEach(e=>e.addEventListener("click",c))}export default showAnswers;

// function showAnswers() {

// let accordion = document.querySelector('.accordion');
// let items = accordion.querySelectorAll('.accordion__item');
// let title = accordion.querySelectorAll('.faq-item');

// function toggleAccordion() {
//     let thisItem = this.parentNode;


//     items.forEach(item => {
//         if (thisItem == item) {
           
//             thisItem.classList.toggle('active');
//             return;
//         }
      
//         item.classList.remove('active');
//     });
// }

// title.forEach(question => question.addEventListener('click', toggleAccordion));

    
// }


//  export default showAnswers;




