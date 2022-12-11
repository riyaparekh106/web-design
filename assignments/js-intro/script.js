"use strict";
const menuItem = document.querySelector("li.nav_item.dropdown");
const subMenu = document.querySelector(".sub-menu");

menuItem.addEventListener("click", () => {
  {
    subMenu.classList.toggle("open");
  }
});














