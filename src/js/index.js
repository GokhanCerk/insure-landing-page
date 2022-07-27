const closeIcon = document.querySelector(".close");
const hamburgerMenu = document.querySelector(".menu");
const mobileNav = document.querySelector(".mobile-nav");
const bodyEl = document.querySelector("body");

closeIcon.addEventListener("click", function (params) {
  closeIcon.classList.add("hidden");
  hamburgerMenu.classList.remove("hidden");
  hamburgerMenu.classList.add("inline-block");

  mobileNav.classList.remove("flex");
  mobileNav.classList.add("hidden");
  bodyEl.classList.remove("overflow-y-hidden");
});

hamburgerMenu.addEventListener("click", function (params) {
  hamburgerMenu.classList.remove("inline-block");
  hamburgerMenu.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  closeIcon.classList.add("inline-block");

  mobileNav.classList.remove("hidden");
  mobileNav.classList.add("flex");
  bodyEl.classList.add("overflow-y-hidden");
});
