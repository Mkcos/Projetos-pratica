const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,

    loop: true,
    
     autoplay: {
        delay: 5000,
        disableOnInteraction: true,
     },

     pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      keyboard: {
        enabled: true,
      },
  });