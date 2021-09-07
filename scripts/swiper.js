// window.addEventListener('resize', resizeHandlerSlider);
// const slider = document.querySelector('#slider');
// let { clientWidth } = document.body;
// let swiper;
// const sliderInit = () => {
//  swiper = new Swiper(".pricesSwiper", {
//     slidesPerView: 1.1,
//     spaceBetween: 30,
    
//     // freeMode: true,
//     initialSlide: 2,
//     centeredSlides: true,
    
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     }
//   })
// }

// const resizeHandlerSlider = () => {
//   if (clientWidth !== document.body.clientWidth) {
//       clientWidth = document.body.clientWidth;

//       if (swiper) {
//           swiper.destroy();
//       }

//       sliderInit();
//   }
// }



const swiper = new Swiper(".pricesSwiper", {
    slidesPerView: 1.1,
    spaceBetween: 30,
    
    // freeMode: true,
    initialSlide: 2,
    centeredSlides: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  })
//swiper();