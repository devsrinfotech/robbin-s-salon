(function () {
  "use strict";

  var menuButton = document.querySelector(".sidebar-button");
  var menu = document.querySelector(".main-menu");

  if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
      menuButton.classList.toggle("active");
      menu.classList.toggle("show-menu");
    });
  }

  document.querySelectorAll(".dropdown-icon").forEach(function (icon) {
    icon.addEventListener("click", function () {
      var submenu = icon.parentElement.querySelector(":scope > .sub-menu");
      icon.classList.toggle("active");
      if (submenu) submenu.classList.toggle("blog-submenu-open");
    });
  });

  window.addEventListener("scroll", function () {
    var header = document.querySelector("header.header-area");
    if (header) header.classList.toggle("sticky", window.scrollY > 200);
  }, { passive: true });
}());
