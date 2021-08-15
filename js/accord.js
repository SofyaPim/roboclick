const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector),
        blocks = document.querySelectorAll(itemsSelector);




    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style');
                });
                this.classList.add('active', 'active-style');
            }
        });
    });




    // btns.forEach(btn => {
    //     btn.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         this.classList.toggle('active');

    //         blocks.forEach(item => {

    //             item.classList.remove('active-content');
    //             item.style.maxHeight = '0px';

    //         })

    //         this.nextElementSibling.classList.add('active-content');

    //         if (this.classList.contains('active')) {

    //             this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 350 + "px";


    //         } else {
    //             this.nextElementSibling.style.maxHeight = '0px';
    //             this.nextElementSibling.classList.remove('active-content');
    //         }
    //     });
    // });








}
accordion('.faq-item', '.answ-item');