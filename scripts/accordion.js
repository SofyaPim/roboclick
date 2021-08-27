const getAnswers = (triggerSelector, contentselector) => {
    const questBlocks = document.querySelectorAll(triggerSelector),
        answBlocks = document.querySelectorAll(contentselector);

    answBlocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown'); //1version

    })
    questBlocks.forEach(btn => {
        btn.addEventListener('click', function () {
            // if (!this.classList.contains('active')) {
            //    questBlocks.forEach(btn => {
            //         btn.classList.remove('active');


            //     });

            //    this.classList.add('active');

            //     // btn.closest('.answer-item').style.display = 'block';//2 version


            // }

            answBlocks.forEach(item => {
                item.style.height = 'none';
            })


            let answ = btn.nextElementSibling;

            if (answ.style.display !== 'block') {

                answ.style.display = 'block';
            } else answ.style.display = 'none';

        });
    });



}
getAnswers('.faq-item', '.answer-item');