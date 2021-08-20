const modals = (triggerSelector, modalSelector, closeSelector, tariffName = '', clickModal = true) => {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        modalProto = document.querySelectorAll('[data-modal]');


    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            modalProto.forEach(item => {
                item.style.display = 'none';
            })
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // try {
            //     const tarif = document.querySelectorAll(tariffName);
            //     tarif.forEach(item => {
            //         let personalTarif = item.innerHTML;
            //         console.log(personalTarif);

            //         try {
            //     const cardTitle = document.querySelectorAll('.card-title');
            //     cardTitle.forEach(item => {
            //         let title = item.innerHTML;
            //         console.log(title);
            //     })
            // } catch (e) {}
                    
            //     })
            // } catch (e) {}

        })

    })
    close.addEventListener('click', () => {

        modalProto.forEach(item => {
            item.style.display = 'none';
        })

        modal.style.display = 'none';
        document.body.style.overflow = '';
    })
    modal.addEventListener('click', (e) => {
        if (e.target == modal && clickModal) {

            modalProto.forEach(item => {
                item.style.display = 'none';
            })
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }



    })









};
modals('.button', '.overlay', '.popup__close', '.tariff-name', false);
modals('.button-recall', '.overlay-recall', '.popup-recall__close', true)