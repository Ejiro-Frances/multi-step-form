"use strict";
//  grab buttons for the next  and back page
const backBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");
// grab buttons and container for the side bar
const stepBtns = document.querySelectorAll(".step-btn");
const stepContainer = document.querySelectorAll(".step-container");
// grab the different pages
const pages = document.querySelectorAll(".main-content");

// get the prices
const monthlyPrice = document.querySelectorAll(".monthly-price");
const yearlyPrice = document.querySelectorAll(".yearly-price");
const yearlyDuration = document.querySelectorAll(".yearly-duration");
const emptyPrice = document.querySelectorAll(".empty-p");

// ////////////////////

// When a button is clicked, the hide class should be remove from one place and added to another

let currentPage = 0;

// Function to show pages

const showPage = (index) => {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
};

// When step buttons are clicked, it shows the next page

stepBtns.forEach((button, index) => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    currentPage = index;
    showPage(currentPage);
  });
});

// When step container is clicked, it shows the next page
stepContainer.forEach((step, index) => {
  step.addEventListener("click", () => {
    currentPage = index;
    showPage(currentPage);
    button.classList.toggle("active");
  });
});

// when the back button is clicked, it shows next page
backBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

// when the next button is clicked, it shows next page
nextBtn.addEventListener("click", () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// initialize first page
showPage(currentPage);

// hide element
function hideElement(hideEl, hide) {
  if (hide) {
    hideEl.classList.add("hide");
  } else {
    hideEl.classList.remove("hide");
  }
}

// show element
function showElement(showEl, visible) {
  if (visible) {
    showEl.classList.remove("hide");
    console.log("showing");
  } else {
    showEl.classList.add("hide");
  }
}

// when the input element is clicked, i want the monthly or yearly plan to show
const toggleButton = document.querySelector(".plan-checkbox");
toggleButton.addEventListener("click", () => {
  monthlyPrice.forEach((mp) => {
    if (toggleButton.checked) {
      mp.classList.add("hide");
    } else {
      mp.classList.remove("hide");
    }
  });
  // Handle the Empty Paragraph/Div
  emptyPrice.forEach((emptyP) => {
    if (toggleButton.checked) {
      emptyP.classList.add("hide");
    } else {
      emptyP.classList.remove("hide");
    }
  });
  // Handle yearly price
  yearlyPrice.forEach((yp) => {
    if (toggleButton.checked) {
      yp.classList.remove("hide");
    } else {
      yp.classList.add("hide");
    }
  });

  yearlyDuration.forEach((yd) => {
    if (toggleButton.checked) {
      yd.classList.remove("hide");
    } else {
      yd.classList.add("hide");
    }
  });

  // --------------- NEW: Add-On Bonuses ---------------
  const monthlyBonuses = document.querySelectorAll(".monthly-bonus");
  const yearlyBonuses = document.querySelectorAll(".yearly-bonus");

  // Hide monthly bonus if yearly is selected
  monthlyBonuses.forEach((mb) => {
    if (toggleButton.checked) {
      mb.classList.add("hide");
    } else {
      mb.classList.remove("hide");
    }
  });

  // Hide yearly bonus if monthly is selected
  yearlyBonuses.forEach((yb) => {
    if (toggleButton.checked) {
      yb.classList.remove("hide");
    } else {
      yb.classList.add("hide");
    }
  });
});

// when the add on check box is clicked, activate the active class
const addonElements = document.querySelectorAll(".add-on");

addonElements.forEach((addOnEl) => {
  // 1. Get the checkbox inside the .add-on
  const childCheckbox = addOnEl.querySelector(".add-checkbox");

  // -------------------------------
  // A. LISTEN FOR CHECKBOX CHANGES
  // -------------------------------
  childCheckbox.addEventListener("change", function () {
    // If the checkbox is checked, add .active
    if (childCheckbox.checked) {
      addOnEl.classList.add("active");
    } else {
      addOnEl.classList.remove("active");
    }
  });

  // -------------------------------------
  // B. LISTEN FOR CLICKS ON THE CONTAINER
  // -------------------------------------
  addOnEl.addEventListener("click", function (e) {
    // If the click target is NOT the checkbox itself,
    // then toggle the checkbox
    if (e.target !== childCheckbox) {
      // Toggle the checkbox
      childCheckbox.checked = !childCheckbox.checked;

      // Manually trigger the "change" handler
      // so the .active class updates
      childCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });
});
