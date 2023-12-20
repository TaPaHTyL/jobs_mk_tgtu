new Swiper('.image-slider', {
    slidesPerView: 6,
    centeredSlides: true,
    loop: false,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        slideShadows: false,
    },
    slideToClickedSlide: true,
    initialSlide: 4,
    
});