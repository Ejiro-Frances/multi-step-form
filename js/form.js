"use strict";

const menuButtons = document.querySelectorAll(".nav-buttons button");
const formPages = document.querySelectorAll(".form-page");
const prevBtn = document.getElementById("prevBtn"); // Previous button
const nextBtn = document.getElementById("nextBtn"); // Next button

let currentPage = 0;

const showPage = (index) => {
  formPages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
};

// menubutton nav
menuButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    currentPage = index;
    showPage(currentPage);
  });
});
// prev button
prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

// forward
nextBtn.addEventListener("click", () => {
  if (currentPage < formPages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

showPage(currentPage);
