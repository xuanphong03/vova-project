window.addEventListener("DOMContentLoaded", function () {
  const blogSwiper = new Swiper(".blog-swiper", {
    loop: true,
    speed: 3000,
    centeredSlides: true,
    slidesPerView: "auto",
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
  });
});
