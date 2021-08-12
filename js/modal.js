const modals = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]');


    trigger.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            windows.forEach(item => {
                item.style.display = 'none';
            });
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';


        })
    })
    close.addEventListener('click', () => {
        windows.forEach(item => {
            item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
    })
    modal.addEventListener('click', (e) => {
        
        if (e.target == modal && closeClickOverlay) {
          windows.forEach(item => {
            item.style.display = 'none';
        });  
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    })

};
modals('.button', '.overlay', '.popup__close', false);
modals('.popup-button', '.overlay-recall', '.popup-recall__close', true);