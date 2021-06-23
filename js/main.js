let nav = document.querySelector("#mobileNav");
let body = document.querySelector("body");

function toggleMenu() {
  console.log("nav");

  if (nav.classList.contains("opacityOne")) {
    nav.classList.remove("opacityOne");
    body.classList.remove("overflowHidden");
  } else {
    nav.classList.add("opacityOne");
    body.classList.add("overflowHidden");
  }
}

function init() {
  console.log("hi");
  document
    .querySelector("#toggleMobileMenu")
    .addEventListener("click", toggleMenu);
}

window.onload = init;
