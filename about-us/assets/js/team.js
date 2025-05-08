window.addEventListener("DOMContentLoaded", function () {
  const lecturerTeamSwiper = new Swiper(".lecturer-team__employee", {
    slidesPerView: 3,
    navigation: {
      nextEl: ".lecturer-team__nav-next",
      prevEl: ".lecturer-team__nav-prev",
    },
  });
  const lecturerThumbnailSwiper = new Swiper(".lecturer-team__thumbnail", {
    slidesPerView: 1,
    effect: "fade",
    navigation: {
      nextEl: ".lecturer-team__nav-next",
      prevEl: ".lecturer-team__nav-prev",
    },
    thumbs: {
      swiper: lecturerTeamSwiper,
    },
  });
});
