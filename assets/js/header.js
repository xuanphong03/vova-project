window.addEventListener("DOMContentLoaded", function () {
  const headerEl = document.querySelector(".header");
  const triggerSubmenuEls = headerEl.querySelectorAll(
    `[data-type='trigger-submenu']`
  );

  const handleCloseAllActiveSubmenu = () => {
    const activeSubmenuEls = headerEl.querySelectorAll(
      ".header__nav-item__submenu.active"
    );
    if (activeSubmenuEls && activeSubmenuEls.length) {
      activeSubmenuEls.forEach((item) => {
        item.classList.remove("active");
      });
    }
  };

  if (triggerSubmenuEls && triggerSubmenuEls.length) {
    triggerSubmenuEls.forEach((item) => {
      const submenuEl = item.nextElementSibling;
      if (!submenuEl) return;

      item.addEventListener("click", function (e) {
        e.stopPropagation();
        const activeStatus = submenuEl.classList.contains("active");
        if (!activeStatus) {
          handleCloseAllActiveSubmenu();
          submenuEl.classList.add("active");
        } else {
          handleCloseAllActiveSubmenu();
        }
      });

      submenuEl.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });

    // Đóng submenu khi click ngoài
    document.addEventListener("click", function () {
      handleCloseAllActiveSubmenu();
    });
  }
});
