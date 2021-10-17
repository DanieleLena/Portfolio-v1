const btn = document.querySelector(".menu-toggle");

const hamburgerAnimation = () => {
  btn.classList.toggle("is-active");
};

const burgerBtn = document.querySelector(".burger");
const about = document.getElementById("about-menu");
const contact = document.getElementById("contact-menu");
const project = document.getElementById("project-menu");

burgerBtn.addEventListener("click", () => {
toggleMenu();
hamburgerAnimation();
});

about.addEventListener("click", () => {
  hamburgerAnimation();
  toggleMenu();
});
contact.addEventListener("click", () => {
  hamburgerAnimation();
  toggleMenu();
});
project.addEventListener("click", () => {
  hamburgerAnimation();
  toggleMenu();
});

const toggleMenu = () => {
  heroContainer.classList.toggle("hide-hero");
  heroContainer.classList.toggle("menu");
  about.classList.toggle("hide-menu");
  contact.classList.toggle("hide-menu");
  project.classList.toggle("hide-menu");
};
