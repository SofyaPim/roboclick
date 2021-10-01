function showDesk(selectors, contentblock) {
    const items = document.querySelectorAll(selectors);
    // const parent = document.querySelector('.tech-support__items');

    // parent.addEventListener('click', () => {


            
         
            
    //             var canvas = document.getElementById("canvas");
    //             if (canvas.getContext) {
    //               var ctx = canvas.getContext("2d");
                  
    //       setTimeout(()=>{
    //         ctx.fillStyle = "#2cd4d9";
    //         ctx.font = '30px'
    //         ctx.fillText("Л",10,10);
    //       }, 100);
                  
    //       setTimeout(()=>{
    //         ctx.fillStyle = "#2cd4d9";
    //         ctx.font = '30px'
    //               ctx.fillText("и",20,10);
    //         }, 200);
    //           setTimeout(()=>{    
    //             ctx.fillStyle = "#2cd4d9";
    //             ctx.font = '30px'
    //                ctx.fillText("ч",30,10);
            
    //               }, 300);
    //             }
    //           setTimeout(()=>{    
    //             ctx.fillStyle = "#2cd4d9";
    //             ctx.font = '30px'
    //              ctx.fillText("н",40,10);
                
    //               }, 400);
    //               setTimeout(()=>{    
    //                 ctx.fillStyle = "#2cd4d9";
    //                 ctx.font = '30px'
    //                  ctx.fillText("ы",50,10);
                    
    //                   }, 500);
    //                   setTimeout(()=>{    
    //                     ctx.fillStyle = "#2cd4d9";
    //                     ctx.font = '30px'
    //                      ctx.fillText("й",60,10);
                        
    //                       }, 600);
    //                       setTimeout(()=>{    
    //                         ctx.fillStyle = "#2cd4d9";
    //                         ctx.font = '30px'
    //                          ctx.fillText("менеджер",70,10);
                            
    //                           }, 700);

    // })

function add(a, b, event) {
    a.addEventListener(event, () => {

        b.style.opacity = 1;


    });
}

function remove(a, b, event) {
    a.addEventListener(event, () => {
        b.style.opacity = 0;

    });
}



items.forEach(item => {
    let desc = item.querySelector(contentblock);
    desc.style.opacity = 0;
    //         parent.style.transform = 'translateX(100%)';
    //         document.addEventListener('scroll', () => {
    //               if(parent.getBoundingClientRect().bottom < 700){
    //                   setTimeout(() => {
    // parent.style.transform = 'translateX(0%)';
    //                   }, 500)

    //         console.log(parent.getBoundingClientRect().bottom);
    //        }
    //         })



    if (window.innerWidth < 1024) {
        add(item, desc, 'focus');
        remove(item, desc, 'blur');
    } else {

        add(item, desc, 'mouseover');
        remove(item, desc, 'mouseout');
    }
})
}
export default showDesk;