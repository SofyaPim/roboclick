const modals = (triggerSelector, modalSelector, closeSelector, tariffName = '', clickModal = true) => {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        modalHeader = modal.querySelector('.popup-title'),
        close = document.querySelector(closeSelector),
        modalProto = document.querySelectorAll('[data-modal]'),
        messageItems = document.querySelectorAll('span.message'),
        smallHeader = document.createElement('h4');

    //  console.log(messageItems);

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();

            }

            // обращение к родителю
            let title = item.parentElement.parentElement;


            if (title.querySelector('.card-title')) {

                let tarifname = title.querySelector('.card-title').innerText;
                smallHeader.innerHTML = `Вы выбрали тариф <br> ${tarifname}`;
                modalHeader.after(smallHeader); //добавление названия тарифа
                console.log(tarifname); // вывод  названия тарифа в консоль

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
        //  errorItems.forEach(item => {
        //             item.classList.remove('_error');
        //         })
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









};
modals('.button', '.overlay', '.popup__close', '.tariff-name', true);