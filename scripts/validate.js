document.addEventListener("DOMContentLoaded", function (){
    const form = document.querySelector('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
       
        let error = validateForm(form);

        let formData = new FormData(form);


        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method:'POST',
                body:formData
            })
            if(response.ok){
                let result = await response.json();
                alert(result.message);
                form.reset();

            }else{
                alert('error')
            }

            
        }else{
            
        //     message.innerHTML = '<p>проверьте корректность заполнения</p>';
        //   //  message.classList.add('commit');
        //   message.style.cssText = 'color: red; font-size: .5rem;';
        //     form.append(message);

        }

        
    }

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