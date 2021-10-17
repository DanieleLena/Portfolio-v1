function enableScrolling() {
  setTimeout(() => {
    document.body.style.overflowY = "scroll";
  }, 3600);
}

const heroContainer = document.querySelector(".hero");

function displayHero() {
  const heroImages = ["hero1", "hero2", "hero3", "hero4"];
  let randomN = Math.floor(Math.floor(Math.random() * heroImages.length));

  heroContainer.innerHTML = `<img src="images/${heroImages[randomN]}.gif" alt="hero">`;
}

window.onload = enableScrolling();
window.onload = displayHero(); //TO CHANGE===================================

