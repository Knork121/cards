const slides = document.querySelectorAll(".slide");

slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    clearClass();
    slide.classList.add("active");
  });
});

function clearClass() {
  slides.forEach((item) => {
    item.classList.remove("active");
  });
}
