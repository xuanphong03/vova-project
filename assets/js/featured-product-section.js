window.addEventListener("DOMContentLoaded", function () {
  const isMobile = window.innerWidth < 640;
  const planetSwiper = new Swiper(".planet-slider", {
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    speed: 500,
    preventClicks: true,
    slidesPerView: "auto",
    navigation: {
      nextEl: ".swiper-slide__nav-button--next",
      prevEl: ".swiper-slide__nav-button--prev",
    },
    allowTouchMove: false,
    effect: "coverflow",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
  });

  if (!isMobile) {
    swiperConfig.coverflowEffect = {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    };
  }

  const featuredProductSectionEl = document.querySelector(
    ".featured-product-section"
  );
  const currentSlideIndexEl = featuredProductSectionEl.querySelector(
    ".swiper-slide__nav-number--current"
  );
  const totalSlideEl = featuredProductSectionEl.querySelector(
    ".swiper-slide__nav-number--total"
  );

  const handleSetTotalSlide = () => {
    // Lấy tổng số slide thực (bỏ qua các slide bị nhân bản do loop)
    const totalSlides =
      planetSwiper.slides.length - planetSwiper.loopedSlides * 2;
    totalSlideEl.textContent =
      totalSlides < 10 ? "0" + totalSlides : totalSlides;
  };
  const handleSetCurrentSlideIndex = () => {
    // Lấy chỉ số thực (realIndex bắt đầu từ 0)
    const currentIndex = planetSwiper.realIndex + 1;
    currentSlideIndexEl.textContent =
      currentIndex < 10 ? "0" + currentIndex : currentIndex;
  };
  planetSwiper.on("init", () => {
    handleSetTotalSlide();
    handleSetCurrentSlideIndex();
  });

  planetSwiper.on("slideChange", () => {
    handleSetCurrentSlideIndex();
  });

  // Kích hoạt sự kiện "init"
  handleSetTotalSlide();
  handleSetCurrentSlideIndex();
  planetSwiper.init();
});
