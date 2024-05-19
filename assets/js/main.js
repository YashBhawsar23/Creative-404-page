/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  distance: "90px",
  duration: 3000,
});

sr.reveal(`.home__data`, { origin: "top", delay: 400 });
sr.reveal(`.home__img`, { origin: "bottom", delay: 600 });
sr.reveal(`.home__footer`, { origin: "bottom", delay: 800 });

const cursor = document.getElementById("cursor");
const cursorBorder = document.getElementById("cursor-border");

let cursorX = 0,
  cursorY = 0,
  borderX = 0,
  borderY = 0;
let deviceType = "";
//check if it is a touch device
const isTouchDevice = () => {
  try {
    document.createEvent("TouchEvent");
    deviceType = "touch";
    return true;
  } catch (e) {
    deviceType = "mouse";
    return false;
  }
};
//move
const move = (e) => {
  cursorX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
  cursorY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
  cursor.style.left = `${cursorX}px`;
  cursor.style.top = `${cursorY}px`;
};

document.addEventListener("mousemove", (e) => {
  move(e);
});
document.addEventListener("touchmove", (e) => {
  move(e);
});
document.addEventListener("touchend", (e) => {
  e.preventDefault();
});

//animate border
const borderAnimation = () => {
  const gapValue = 5;
  borderX += (cursorX - borderX) / gapValue;
  borderY += (cursorY - borderY) / gapValue;
  cursorBorder.style.left = `${borderX}px`;
  cursorBorder.style.top = `${borderY}px`;
  requestAnimationFrame(borderAnimation);
};

requestAnimationFrame(borderAnimation);
