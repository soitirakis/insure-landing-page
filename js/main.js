"use strict"
const modal = document.querySelector("#myModal");

const hamburger = document.querySelector("#nav-menu");

const close = document.getElementsByClassName('close')[0];

let value = false;

hamburger.addEventListener('click', () => {
  if(value === false) {
    modal.style.width = "100%";
    hamburger.setAttribute("src", "img/icon-close.svg");
    value = true;
  }else {
    modal.style.width = "0";
    hamburger.setAttribute("src", "img/icon-hamburger.svg");
    value = false;
  }

});
//initialy with the span=close
/*
hamburger.addEventListener("click", () => {
  modal.style.width = "100%";
});

close.addEventListener('click', () => {
  modal.style.width = "0";
  hamburger.setAttribute("src", "img/icon-hamburger.svg");
});
*/

window.addEventListener('click', (e) => {
  if(e.target == modal) {
    modal.style.width = "0";
  }
})
