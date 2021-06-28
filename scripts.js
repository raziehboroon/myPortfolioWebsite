const navBtn = document.querySelector(".btn");
const menuSlide = document.querySelector("#menu");
const navLinks = document.querySelectorAll("nav ul a");

navBtn.addEventListener("click", () => {
  menuSlide.classList.toggle("navToggle");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    menuSlide.classList.toggle("navToggle");
  });
});

$("nav a").on("click", function (e) {
  if (this.hash != "") {
    e.preventDefault();
    const hash = this.hash;
    $("html, body").animate({ scrollTop: $(hash).offset().top }, 800);
  }
});
