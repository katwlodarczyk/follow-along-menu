const menuItems = document.querySelectorAll("nav ul li");
const menuBackground = document.querySelector(".menu-background");
const nav = document.querySelector("nav ul");
const arrow = document.querySelector(".arrow");

menuItems.forEach((menuItem) =>
  menuItem.addEventListener("mouseenter", handleEnter)
);
menuItems.forEach((menuItem) =>
  menuItem.addEventListener("mouseleave", handleLeave)
);

function handleEnter() {
  const menu = this.querySelector(".menu");

  menu.classList.add("menu-enter");
  setTimeout(() => menu.classList.add("menu-enter-active"), 50);

  const menuCoords = menu.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  menuBackground.classList.add("open");
  arrow.classList.add("open");

  menuBackground.style.setProperty(
    "transform",
    `
      translate(${menuCoords.left}px, ${menuCoords.top + window.scrollY}px)
      scaleX(${menuCoords.width / 100})  
      scaleY(${menuCoords.height / 100})  
    `
  );

  arrow.style.setProperty(
    "transform",
    `
      translate(${menuCoords.left + menuCoords.width / 2 - 7}px, ${
      menuCoords.top - navCoords.top
    }px) 
      rotate(45deg) translate(-50%)
    `
  );
}

function handleLeave() {
  const menu = this.querySelector(".menu");

  menu.classList.remove("menu-enter", "menu-enter-active");
  menuBackground.classList.remove("open");
  arrow.classList.remove("open");
}
