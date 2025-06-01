const swiper = new Swiper(".mySwiper1", {
    speed: 1500,
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".custom-swiper-button-next",
        prevEl: ".custom-swiper-button-prev",
    },
});
