window.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth < 640;
  const storySwiper = new Swiper(".story__slider", {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: !isMobile ? "auto" : 1,
    allowTouchMove: false,
    effect: !isMobile ? "coverflow" : "",
    coverflowEffect: !isMobile
      ? {
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }
      : {},
  });
});
