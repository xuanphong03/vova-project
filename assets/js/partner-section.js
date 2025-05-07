window.addEventListener("DOMContentLoaded", function () {
  const sliderEls = document.querySelectorAll(".slider");

  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    sliderEls.forEach((sliderEl) => {
      // add data-animated="true" to every `.sliderEl` on the page
      sliderEl.setAttribute("data-animated", true);

      // Make an array from the elements within `.sliderEl-inner`
      const sliderInner = sliderEl.querySelector(".slider__inner");
      const sliderContent = Array.from(sliderInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.sliderEl-inner`
      sliderContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        sliderInner.appendChild(duplicatedItem);
      });
    });
  }
});
