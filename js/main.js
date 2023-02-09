"use strict"
const modal = document.querySelector("#myModal");

const hamburger = document.querySelector("#nav-menu");

const close = document.getElementsByClassName('close')[0];

hamburger.addEventListener('click', () => {
  modal.style.width = "100%";
});

close.addEventListener('click', () => {
  modal.style.width = "0";
});

window.addEventListener('click', (e) => {
  if(e.target == modal) {
    modal.style.width = "0";
  }
})
