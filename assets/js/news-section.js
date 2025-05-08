window.addEventListener("DOMContentLoaded", function () {
  const newsSwiper = new Swiper(".news-swiper", {
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
