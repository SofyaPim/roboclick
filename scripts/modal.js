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


    function clearInputs(items) {

        let check = document.querySelectorAll('.check__input');
        check.forEach(box => {
            box.checked = true;
        })
        items.forEach(item => {

            item.value = '';

        })


    }

    function closeForm(message, form, overlay) {

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
            console.log();
            if(e.target.innerHTML.trim() === 'подробнее' || e.target.innerHTML.trim() === 'заказать обратный звонок'){
                modalHeader.innerHTML = `Заказать обратный звонок `;

            }

          

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