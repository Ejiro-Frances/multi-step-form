//  grab buttons for the next  and back page
const infoNextButton = document.querySelector("#info-btn");
const stepBackButton = document.querySelector("#step-bck-btn");
const stepFwdButton = document.querySelector("#step-fwd-btn");
const pickAddBackButton = document.querySelector("#back-add-on");
const pickAddFwdButton = document.querySelector("#fwd-add-on");
// grab buttons for the side bar
const step1Btn = document.querySelector("#step-1");
const step2Btn = document.querySelector("#step-2");

// grab the different pages
const personalInfoContainer = document.querySelector("#personal-info");
const selectPlanContainer = document.querySelector("#select-plan");
const addOnContainer = document.querySelector("#addon-box");
const finishingUpContainer = document.querySelector("#finishing-up");
// const selectPlanContainer = document.querySelector("#select-plan");

// get the prices
const monthlyPrice = document.querySelectorAll(".monthly-price");
const yearlyPrice = document.querySelectorAll(".yearly-price");
const yearlyDuration = document.querySelectorAll(".yearly-duration");
const emptyPrice = document.querySelectorAll(".empty-p");
// When a button is clicked, the hide class should be remove from one place and added to another

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

// When the btn for step 1 is clicked, the personal info page shows up
step1Btn.addEventListener("click", () => {
  showElement(personalInfoContainer, true);
  hideElement(selectPlanContainer, true);
});

// When clicked, page 2 shows up
infoNextButton.addEventListener("click", () => {
  hideElement(personalInfoContainer, true);
  showElement(selectPlanContainer, true);
  // personalInfoContainer.classList.add("hide");
  // selectPlanContainer.classList.remove("hide");
});

// This is the button on the select your plan page
// when clicked forward is page 3, backward is page 1
stepBackButton.addEventListener("click", () => {
  console.log("back");
  hideElement(selectPlanContainer, true);
  showElement(personalInfoContainer, true);
});
stepFwdButton.addEventListener("click", () => {
  hideElement(selectPlanContainer, true);
  showElement(addOnContainer, true);
});

// forward and backward on the pick add on page
pickAddBackButton.addEventListener("click", () => {
  hideElement(addOnContainer, true);
  showElement(selectPlanContainer, true);
});
pickAddFwdButton.addEventListener("click", () => {
  hideElement(addOnContainer, true);
  showElement(finishingUpContainer, true);
});
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

// const addonCheckboxes = document.querySelectorAll(".add-checkbox");

// addonCheckboxes.forEach((checkbox) => {
//   checkbox.addEventListener("change", function () {
//     // Find the parent .add-on container of this checkbox
//     const parentAddOn = checkbox.closest(".add-on");

//     // If the checkbox is checked, add 'active'; otherwise remove it
//     if (checkbox.checked) {
//       parentAddOn.classList.add("active");
//     } else {
//       parentAddOn.classList.remove("active");
//     }
//   });
// });

// when the container is clicked, i want the checkbox to be checked
// const addonElements = document.querySelectorAll(".add-on");

// addonElements.forEach((addOnEl) => {
//   addOnEl.addEventListener("click", function () {
//     // Find the input inside this .add-on container
//     const childCheckbox = addOnEl.querySelector(".add-checkbox");

//     // Toggle the checkbox
//     childCheckbox.checked = !childCheckbox.checked;

//     // Toggle the 'active' class based on whether it is checked
//     addOnEl.classList.toggle("active", childCheckbox.checked);
//   });
// });
