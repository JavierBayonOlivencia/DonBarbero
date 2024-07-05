const toggleBtn = document.getElementById("toggle");
const header = document.getElementById("header");

const testimonialContainer = document.getElementById("testi__container");
const testimonialCard = document.querySelectorAll(".--card");

const notePopUp = document.querySelector(".note");

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