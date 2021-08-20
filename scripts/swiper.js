const swiper = new Swiper(".pricesSwiper", {
    slidesPerView: 1.3,
    spaceBetween: 30,
    // freeMode: true,
    initialSlide: 2,
    centeredSlides: true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });