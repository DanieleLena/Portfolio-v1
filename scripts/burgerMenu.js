const btn = document.querySelector(".burger-btn");

const hamburgerAnimation = () => {
  btn.classList.toggle("active");
  btn.classList.toggle("not-active");
};

btn.addEventListener("click", () => {
  hamburgerAnimation();
});

const burgerBtn = document.querySelector(".burgerMenu");
const about = document.getElementById("about-menu");
const contact = document.getElementById("contact-menu");
const project = document.getElementById("project-menu");

burgerBtn.addEventListener("click", () => toggleMenu());
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
  // onWindowResize()
  about.classList.toggle("hide-menu");
  contact.classList.toggle("hide-menu");
  project.classList.toggle("hide-menu");
};
