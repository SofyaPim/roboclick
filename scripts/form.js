const forms = () => {
    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    const message = {
        loading: 'Загрузка ...',
        success: 'Спасибо, скоро с Вами свяжемся',
        failure: 'Что-то пошло не так'


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
           if (!item.classList.contains('_submit')) {
                item.value = '';
           }
               
           
          
        }) 
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status-message');
            item.appendChild(statusMessage);
            let error = validateForm(form);

            const formData = new FormData(item);
            postData('./server.php', formData)//./server.php
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

                function validateForm(form) {
                    let error = 0;
                    let formReqInputs = document.querySelectorAll('._req');
                    for (let i = 0; i < formReqInputs.length; i++) {
                        const input = formReqInputs[i];
                        removeError(input);
                        if(input.classList.contains('_email')){
                            if(testEmail(input)){
                                addError(input);
                                error++;
                            }
                        }else if(input.getAttribute("type") === "checkbox" && input.checked === false){
                            addError(input);
                            error++;
                        }else {
                            if(input.value === ''){
                                addError(input);
                                error++;
                            }
                        }
                        return error;
                    }
                    
                }
                function addError(input){
                    input.parentElement.classList.add('_error');
                    input.classList.add('_error');
                }
                function removeError(input){
                    input.parentElement.classList.remove('_error');
                    input.classList.remove('_error');
                }
                function testEmail(input) {
                    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
                }
                







        })
    })


}
forms();

