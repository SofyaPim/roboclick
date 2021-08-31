const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('._req');


    const message = {
        loading: 'Загрузка ...',
        success: 'Спасибо, скоро с Вами свяжемся',
        failure: 'Что-то пошло не так',
        validate: 'Заполните это поле'

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

    function Validate(inputs) { //проверка соответствию
        let err = 0;

        function addErr() {
            err++;
        }

        inputs.forEach(item => {

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status-message');
            item.addEventListener('input', (e) => {

                let sibling = item.nextElementSibling;
                item.classList.remove('_error');

                sibling.style.opacity = 0;
                if (item.name === 'agreement') {
                    let prev = item.previousElementSibling;
                    sibling.style.opacity = 1;
                    prev.style.opacity = 0;
                }
            })

            switch (item.name) {

                case 'phone':
                    if (item.value.length === 0 && item.value.length < 11 ) {
                        
                        let sibling = item.nextElementSibling;
                        addErr();
                        item.classList.add('_error');
                        sibling.style.opacity = 1;
                    }

                    break;
                case 'name':
                    if (item.value.length === 0) {
                        let sibling = item.nextElementSibling;
                        addErr();
                        item.classList.add('_error');
                        sibling.style.opacity = 1;
                    }

                    break;
                case 'agreement':
                    if (item.checked === false) {
                        let prev = item.previousElementSibling;
                        addErr();
                        item.classList.add('_error');
                        prev.style.opacity = 1;
                    }


                    break;
                case 'email':
                    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(item.value)) {
                        let sibling = item.nextElementSibling;
                        addErr();
                        item.classList.add('_error');
                        sibling.style.opacity = 1;
                    }

                    break;
                default:

                    break;
            }



        })
        if (err <= 0) {
          //  console.log(err);
            return true;
        } else {
            //console.log(err);
            return false;
        }


    }


    form.forEach(item => {
        
        item.addEventListener('submit', (e) => {

            e.preventDefault();

            let inputsForm = item.querySelectorAll('input');
         //   console.log(inputsForm);
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status-message');
            item.appendChild(statusMessage);


            if (!Validate(inputsForm)) {
                return;
            }

            const formData = new FormData(item);

          


            postData('./sendmail.php', formData) // c ./server.php  проверено //
                .then(res => {
                    console.log(res);


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