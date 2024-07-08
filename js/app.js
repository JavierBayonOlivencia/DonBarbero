const toggleBtn = document.getElementById("toggle");
const header = document.getElementById("header");

const testimonialContainer = document.getElementById("testi__container");
const testimonialCard = document.querySelectorAll(".--card");

const notePopUp = document.querySelector(".note");

const sections = document.querySelectorAll("section");
const navLists = document.querySelectorAll(".item");

/* NAVEGATION TOGGLE */
toggleBtn.addEventListener("click", function () {
  header.classList.toggle("show");
});

/* SCROLL */
let isDown = false;
let startX;
let scrollLeft;

testimonialContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  testimonialContainer.classList.add("active");
  startX = e.pageX - testimonialContainer.offsetLeft;
  scrollLeft = testimonialContainer.scrollLeft;
});

testimonialContainer.addEventListener("mouseleave", () => {
  isDown = false;
  testimonialContainer.classList.remove("active");
});

testimonialContainer.addEventListener("mouseup", () => {
  isDown = false;
  testimonialContainer.classList.remove("active");
});

testimonialContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - testimonialContainer.offsetLeft;
  const walk = (x - startX) * 1; //scroll-fast
  testimonialContainer.scrollLeft = scrollLeft - walk;
});

/* POPUP NOTE */
function popUp() {
  notePopUp.classList.toggle("note__active");
}

/* NAVEGATION LINK ACTIVE */
window.addEventListener("scroll", function() {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLists.forEach((link) => {
        link.classList.remove("active-page");
        const nextActiveLink = document.querySelector(".list li a[href*=" + id + "]");

        if (nextActiveLink === null) return;
        
        nextActiveLink.classList.add("active-page");
      });
    }
  });
});
