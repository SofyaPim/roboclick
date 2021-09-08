function modal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        modalHeader = modal.querySelector('.popup-title'),
        close = document.querySelector(closeSelector),
        modalProto = document.querySelectorAll('[data-modal]'),
        messageItems = document.querySelectorAll('span.message'),
        smallHeader = document.createElement('h4'),
        inputs = document.querySelectorAll('._req'),
        formPopup = document.querySelector('.popup');


    function clearInputs(items){
       

       items.forEach(item => {
     if (item.getAttribute('checkbox')) {
         console.log('check');
         item.checked = true;
     }
         console.log('all');
          item.value = '';
     
            
            


//  let checkbox = item.closest('.checkbox_label');
//  let afterElem = document.createElement(':after');
//  afterElem.style.cssText  = `  position: absolute;
//  content: url('../images/checked-mark.svg');
//  opacity: 1;
//  top: -.5rem;
//  left: 0px;
// transition: all .3s ease-in;`;
//  checkbox.after(afterElem);

          
        })

    }

    function closeForm(message, form, overlay ){

        message.remove();

        form.style.cssText = `transform: scale(0);
                                    opacity: 0;`;

        setTimeout(() => {
           overlay.style.display = 'none';
        }, 200)

        document.body.style.overflow = '';

    }


    trigger.forEach(item => {

        item.addEventListener('click', (e) => {

            let title = item.parentElement.parentElement;

            if (title.querySelector('.card-title')) {

                let tarifname = title.querySelector('.card-title').innerText;
                smallHeader.innerHTML = `Вы выбрали тариф <br> ${tarifname}`;
                modalHeader.after(smallHeader); //добавление названия тарифа

            }

            modalProto.forEach(item => {
                item.style.display = 'none';
            })

            modal.style.display = 'block';
            setTimeout(() => {
                formPopup.style.cssText = `transform: scale(1);
                opacity: 1;`;

            }, 300)

            document.body.style.overflow = 'hidden';

        })

    })

    close.addEventListener('click', () => {
        let errorItems = document.querySelectorAll('._error');
        clearInputs(inputs);
        messageItems.forEach(item => {
            item.style.opacity = 0;
        })


        errorItems.forEach(item => {
            item.classList.remove('_error');
        })

        
        closeForm(smallHeader, formPopup, modal);

        
    })




    modal.addEventListener('click', (e) => {

        if (e._clickWithoutModal) {
            return;
        }

        let errorItems = document.querySelectorAll('._error');

        errorItems.forEach(item => {
            item.classList.remove('_error');

        })

        messageItems.forEach(item => {
            item.style.opacity = 0;
        })

        if (e.target === modal) {

            modalProto.forEach(item => {

              //  item.style.display = 'none';
                clearInputs(inputs);

            })


            closeForm(smallHeader, formPopup, modal);
        }

    })

    formPopup.addEventListener('click', (e) => {
        e._clickWithoutModal = true;
    })

}
//document.addEventListener("DOMContentLoaded", modal('.button', '.overlay', '.popup__close', '.tariff-name') );
// export default modal('.button', '.overlay', '.popup__close', '.tariff-name');
export default modal;