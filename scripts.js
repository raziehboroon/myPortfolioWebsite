const nav = document.querySelector("nav");
const navBtn = document.querySelector(".navBtn");
const menuSlide = document.querySelector("#menu");
// const navLinks = document.querySelectorAll("nav ul a");
const navLogo = document.querySelector(".nav-logo");
const copyrightDate = document.querySelector("#copyright-date");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 80) {
    nav.classList.add("nav-fixed");
  } else {
    nav.classList.remove("nav-fixed");
  }
});

navBtn.addEventListener("click", () => {
  menuSlide.classList.toggle("navToggle");
  navBtn.classList.toggle("navToggle");
});

navLogo.addEventListener("click", () => {
  menuSlide.classList.remove("navToggle");
  navBtn.classList.remove("navToggle");
});

menuSlide.addEventListener("click", () => {
  menuSlide.classList.remove("navToggle");
  navBtn.classList.remove("navToggle");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 776) {
    menuSlide.classList.remove("navToggle");
  }
});
const getData = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return fullYear;
};
copyrightDate.textContent = getData();

// when click on nav item, scroll to top of that section
$("nav a").on("click", function (e) {
  if (this.hash != "") {
    e.preventDefault();
    const hash = this.hash;
    const navHeight = nav.offsetHeight;
    var scrollToPosition = $(hash).offset().top - navHeight;
    $("html, body").animate({ scrollTop: scrollToPosition }, 800);
  }
});
