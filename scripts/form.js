function forms() {
        const form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('._req');
        const message = {
            loading: 'Загрузка ...',
            success: 'Спасибо, скоро с Вами свяжемся',
            failure: 'Что-то пошло не так'
        }
        const postData = async (url, data) => {
            let res = await fetch(url, {
                method: "POST",
                body: data
            })
            return await res.text();
        }
        const clearInputs = (items) => {
            items.forEach(item => {
                item.value = '';
            })
        }
        function phoneValidate(input) {
            let value = input.value;
            value = value.replace(/[^0-9]/g, '');
            if (value.length === 11) {
                console.log('!');
                return true;
            }
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
                        if (!phoneValidate(item)) { 
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
                return true;
            } else {
                return false;
            }
        }
        form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                let inputsForm = item.querySelectorAll('input');
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status-message');
                item.appendChild(statusMessage);
                if (!Validate(inputsForm)) {
                    return;
                }
                const formData = new FormData(item);
                if (item.querySelector('h4')) {
                    let tarifName = item.querySelector('h4');
                    let tarif = tarifName.innerHTML;
                    let tarifTitle = tarif.slice(22);
                    formData.append("Тариф", tarifTitle);
                }
                formData.delete('agreement');
                statusMessage.textContent = message.loading;
                postData('./telegram.php', formData) // c ./server.php  проверено // //   - проверено   ./sendmail.php
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.success;
                    })
                    .catch(() => {
                        statusMessage.textContent = message.failure;
                    })
                    .finally(() => {
                        clearInputs(inputs);
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 3000);
                    })
            })
        })
    }
    export default forms;
    
    