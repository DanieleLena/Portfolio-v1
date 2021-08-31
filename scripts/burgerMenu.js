const btn = document.querySelector(".burgerMenu");

// ANIMATION FOR THE BTN ================================
const go1Second = document.getElementById("go1Second");
const go2Second = document.getElementById("go2Second");
const go3Second = document.getElementById("go3Second");

const go1Triangle = document.getElementById("go1Triangle");
const go2Triangle = document.getElementById("go2Triangle");

const back1Triangle = document.getElementById("back1Triangle");
const back2Triangle = document.getElementById("back2Triangle");

const back1Second = document.getElementById("back1Second");
const back2Second = document.getElementById("back2Second");
const back3Second = document.getElementById("back3Second");

let isOpenBtn = true;

btn.addEventListener("click", function () {
  if (isOpenBtn) {
    closeBurger();
  } else {
    openBurger();
  }
});

// END ANIMATION FOR THE BTN ================================

const closeBurger = () => {
  go1Second.beginElement();
  go2Second.beginElement();
  go3Second.beginElement();

  setTimeout(function () {
    go1Triangle.beginElement();
    go2Triangle.beginElement();
  }, 500);

  isOpenBtn = false;
};

const openBurger = () => {
  back1Triangle.beginElement();
  back2Triangle.beginElement();

  setTimeout(function () {
    back1Second.beginElement();
    back2Second.beginElement();
    back3Second.beginElement();
  }, 300);

  isOpenBtn = true;
};



const burgerBtn = document.querySelector(".burgerMenu");
const about = document.getElementById("about-menu");
const contact = document.getElementById("contact-menu");
const project = document.getElementById("project-menu");

burgerBtn.addEventListener("click", () => toggleMenu());
about.addEventListener("click", () => {
  toggleMenu(), openBurger();
});
contact.addEventListener("click", () => {
  toggleMenu(), openBurger();
});
project.addEventListener("click", () => {
  toggleMenu(), openBurger();
});

const toggleMenu = () => {
  heroContainer.classList.toggle("hide-hero");
  heroContainer.classList.toggle("menu");
  // onWindowResize()
  about.classList.toggle("hide-menu");
  contact.classList.toggle("hide-menu");
  project.classList.toggle("hide-menu");
};



