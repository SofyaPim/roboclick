//function modal(e,t,r){const o=document.querySelectorAll(e),c=document.querySelector(t),l=c.querySelector(".popup-title"),n=document.querySelector(r),a=document.querySelectorAll("[data-modal]"),i=document.querySelectorAll("span.message"),u=document.createElement("h4"),d=document.querySelectorAll("._req"),s=document.querySelector(".popup");function y(e){document.querySelectorAll(".check__input").forEach(e=>{e.checked=!0}),e.forEach(e=>{e.value=""})}function m(e,t,r){e.remove(),t.style.cssText="transform: scale(0);\n                                    opacity: 0;",setTimeout(()=>{r.style.display="none"},200),document.body.style.overflow=""}o.forEach(e=>{e.addEventListener("click",t=>{let r=e.parentElement.parentElement;if(console.log(),"подробнее"!==t.target.innerHTML.trim()&&"заказать обратный звонок"!==t.target.innerHTML.trim()||(l.innerHTML="Заказать обратный звонок "),r.querySelector(".card-title")){let e=r.querySelector(".card-title").innerText;u.innerHTML=`Вы выбрали тариф <br> ${e}`,l.innerHTML="Оформление заказа",l.after(u)}a.forEach(e=>{e.style.display="none"}),c.style.display="block",setTimeout(()=>{s.style.cssText="transform: scale(1);\n                opacity: 1;"},300),document.body.style.overflow="hidden"})}),n.addEventListener("click",()=>{let e=document.querySelectorAll("._error");y(d),i.forEach(e=>{e.style.opacity=0}),e.forEach(e=>{e.classList.remove("_error")}),m(u,s,c)}),c.addEventListener("click",e=>{if(e._clickWithoutModal)return;document.querySelectorAll("._error").forEach(e=>{e.classList.remove("_error")}),i.forEach(e=>{e.style.opacity=0}),e.target===c&&(a.forEach(e=>{y(d)}),m(u,s,c))}),s.addEventListener("click",e=>{e._clickWithoutModal=!0})}export default modal;
function modal(triggerSelector, modalSelector, closeSelector) {
    const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        modalHeader = modal.querySelector('.popup-title'),
        close = document.querySelector(closeSelector),
        modalProto = document.querySelectorAll('[data-modal]'),
        messageItems = document.querySelectorAll('span.message'),
        smallHeader = document.createElement('h4'),
        inputs = document.querySelectorAll('._req'),
        formPopup = document.querySelector('.popup');


    function clearInputs(items) {

        let check = document.querySelectorAll('.check__input');
        check.forEach(box => {
            box.checked = true;
        })
        items.forEach(item => {

            item.value = '';

        })


    }

    function closeForm(message, form, overlay) {

        message.remove();

        form.style.cssText = `transform: scale(0);
                                    opacity: 0;`;

        setTimeout(() => {
            overlay.style.display = 'none';
        }, 200)

        document.body.style.overflow = '';

    }


    trigger.forEach(item => {

        item.addEventListener('click', (e) => {

              let title = item.parentElement.parentElement;
            console.log();
            if(e.target.innerHTML.trim() === 'подробнее' || e.target.innerHTML.trim() === 'заказать обратный звонок'){
                modalHeader.innerHTML = `Заказать обратный звонок `;

            }

          

            if (title.querySelector('.card-title')) {

                let tarifname = title.querySelector('.card-title').innerText;
                smallHeader.innerHTML = `Вы выбрали тариф <br> ${tarifname}`;
                modalHeader.innerHTML = `Оформление заказа`;
                modalHeader.after(smallHeader); //добавление названия тарифа

            }


            modalProto.forEach(item => {
                item.style.display = 'none';
            })

            modal.style.display = 'block';
            setTimeout(() => {
                formPopup.style.cssText = `transform: scale(1);
                opacity: 1;`;

            }, 300)

            document.body.style.overflow = 'hidden';

        })

    })

    close.addEventListener('click', () => {
        let errorItems = document.querySelectorAll('._error');
        clearInputs(inputs);
        messageItems.forEach(item => {
            item.style.opacity = 0;
        })


        errorItems.forEach(item => {
            item.classList.remove('_error');
        })


        closeForm(smallHeader, formPopup, modal);


    })




    modal.addEventListener('click', (e) => {

        if (e._clickWithoutModal) {
            return;
        }

        let errorItems = document.querySelectorAll('._error');

        errorItems.forEach(item => {
            item.classList.remove('_error');

        })

        messageItems.forEach(item => {
            item.style.opacity = 0;
        })

        if (e.target === modal) {

            modalProto.forEach(item => {

                //  item.style.display = 'none';
                clearInputs(inputs);

            })


            closeForm(smallHeader, formPopup, modal);
        }

    })

    formPopup.addEventListener('click', (e) => {
        e._clickWithoutModal = true;
    })

}

export default modal;