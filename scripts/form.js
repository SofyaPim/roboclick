const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('._req');

    const message = {
        loading: 'Загрузка ...',
        success: 'Спасибо, скоро с Вами свяжемся',
        failure: 'Что-то пошло не так',
        validate: 'Заполните поля'


    }


    const postData = async (url, data) => {
        document.querySelector('.status-message').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        })
        return await res.text();
    }
    const clearInputs = () => {

        inputs.forEach(item => {

            item.value = '';




        })
    }
    const isInputEmpty = () => { //проверка на пустоту
        inputs.forEach(item => {
            if (item.value.length !== '') {
                return false;
            }
        })
    }
    isInputEmpty();
    const emaiValidate = () => { //проверка соответствию регулярному выражению email -inputa

        inputs.forEach(item => {
            if (item.classList.contains('_email')) {
                let emailInput = item;

                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(emailInput.value);
            }
        })
    }

    emaiValidate();

    // inputs.forEach(input => {
    //     if (input.value.length === 0) {
    //         statusMessage.textContent = message.validate;
    //     }
    // })

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status-message');
            item.appendChild(statusMessage);


            const formData = new FormData(item);

            console.log(formData.get('name')); //данные формы 
            console.log(formData.get('phone'));
            console.log(formData.get('email'));

            //    if(isInputEmpty === true && emaiValidate === true){  // куда ???

            //    }
            postData('./sendmail.php', formData) // c ./server.php  проверено //
                .then(res => {

                    console.log(res);
                    //   isInputEmpty === true && emaiValidate === true
                    statusMessage.textContent = message.success;

                })
                .catch(() => {
                    statusMessage.textContent = message.failure;

                })
                .finally(() => {

                    clearInputs();


                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000);
                })













        })
    })


}
forms();


// router.post("/", (req, res, next) => {
//     foo().catch(bar).then(result => {
//         res.send(result);
//     , error => {
//         console.error(error);
//         res.sendStatus(500); // or next(error) or whatever
//     });
// })


//foo()
// .then((result) => {
//     res.send(result)
// })
// .catch((error) => {
//     console.log(error)
//     bar()
//     .then((data) => {
//         res.send(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })
// })