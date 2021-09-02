
const modals = (triggerSelector, modalSelector, closeSelector, clickModal = true) => {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        modalHeader = modal.querySelector('.popup-title'),
        close = document.querySelector(closeSelector),
        modalProto = document.querySelectorAll('[data-modal]'),
        messageItems = document.querySelectorAll('span.message'),
        smallHeader = document.createElement('h4'),
        inputs = document.querySelectorAll('._req');
        //add popap

    //  console.log(messageItems);
    const clearInputs = () => {

        inputs.forEach(item => {
            item.value = '';
        })
    }



    trigger.forEach(item => {


        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
                clearInputs();
            }

            // обращение к родителю
            let title = item.parentElement.parentElement;


            if (title.querySelector('.card-title')) {

                let tarifname = title.querySelector('.card-title').innerText;
                smallHeader.innerHTML = `Вы выбрали тариф <br> ${tarifname}`;
                modalHeader.after(smallHeader); //добавление названия тарифа
                //  console.log(tarifname); // вывод  названия тарифа в консоль

            }

            modalProto.forEach(item => {
                //item.style.display = 'none';
                item.style.transform = 'scale(0)';

            })
            // modal.style.display = 'block';
            modal.style.transform = 'scale(1)';
            document.body.style.overflow = 'hidden';

        })

    })
    close.addEventListener('click', () => {
        let errorItems = document.querySelectorAll('._error');
        //  clearInputs();
        messageItems.forEach(item => {
            item.style.opacity = 0;
        })


        errorItems.forEach(item => {
            item.classList.remove('_error');
        })

        modalProto.forEach(item => {
            // item.style.display = 'none';
            item.style.transform = 'scale(0)';
        })

        smallHeader.remove();
        //  modal.style.display = 'none';
        modal.style.transform = 'scale(0)';
        document.body.style.overflow = '';
    })
    modal.addEventListener('click', (e) => {
        // if( e_flag{ return})
        console.log("!!");
        let errorItems = document.querySelectorAll('._error');
        // clearInputs();
        errorItems.forEach(item => {
            item.classList.remove('_error');

        })
        messageItems.forEach(item => {
            item.style.opacity = 0;
        })
        if (e.target == modal && clickModal) {

            modalProto.forEach(item => {
                //    item.style.display = 'none';
                item.style.transform = 'scale(0)';

            })
            smallHeader.remove();
            //  modal.style.display = 'none';
            modal.style.transform = 'scale(0)';
            document.body.style.overflow = '';

        }
   
    })
    // add popup event - flag=true

};
document.addEventListener("DOMContentLoaded", modals('.button', '.overlay', '.popup__close', '.tariff-name', true) );
