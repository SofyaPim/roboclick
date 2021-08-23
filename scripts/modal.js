const modals = (triggerSelector, modalSelector, closeSelector, tariffName = '', clickModal = true) => {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        modalHeader = modal.querySelector('.popup-title'),
        close = document.querySelector(closeSelector),
        modalProto = document.querySelectorAll('[data-modal]');
 let smallHeader = document.createElement('h4');

    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            // обращение к родителю
            let title = item.parentElement.parentElement;

           
            if (title.querySelector('.card-title')) {

                let tarifname = title.querySelector('.card-title').innerText;
                smallHeader.innerHTML = `Вы выбрали тариф ${tarifname}`;



               // smallHeader.innerHTML.insertAdjacentHTML('afterend', '<h3 class="popup-title">Оформление заказа</h3>');
               modalHeader.append(smallHeader); //добавление названия тарифа
                console.log(tarifname); // вывод  названия тарифа в консоль

            }

            modalProto.forEach(item => {
                item.style.display = 'none';

            })
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

        })

    })
    close.addEventListener('click', () => {

        modalProto.forEach(item => {
            item.style.display = 'none';


        })
        smallHeader.remove();
        modal.style.display = 'none';
        document.body.style.overflow = '';
    })
    modal.addEventListener('click', (e) => {

        if (e.target == modal && clickModal) {

            modalProto.forEach(item => {
                item.style.display = 'none';


            })
            smallHeader.remove();
            modal.style.display = 'none';
            document.body.style.overflow = '';

        }



    })









};
modals('.button', '.overlay', '.popup__close', '.tariff-name', false);
modals('.button-recall', '.overlay-recall', '.popup-recall__close', true)