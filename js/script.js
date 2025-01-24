"use strict";
//  grab buttons for the next  and back page
const backBtn = document.querySelector("#back-btn");
const nextBtn = document.querySelector("#next-btn");
// grab buttons and container for the side bar
const stepBtns = document.querySelectorAll(".step-btn");
const stepContainer = document.querySelectorAll(".step-container");
const changePlanBtn = document.querySelector(".change-plan");
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

// Function to update the button text and visibility
const updateButtonState = function () {
  if (currentPage === 0) {
    backBtn.style.opacity = "0";
    nextBtn.textContent = "Next Step";
  } else if (currentPage === pages.length - 1) {
    backBtn.style.opacity = "1";
    nextBtn.textContent = "Confirm";
  } else {
    backBtn.style.opacity = "1";
    nextBtn.textContent = "Next Step";
  }
};

// Function to show pages

const showPage = (index) => {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
  updateButtonState();
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

// When the change plan button on the summary page is clicked, it should go to the plan page
changePlanBtn.addEventListener("click", () => {
  pages[pages.length - 1].classList.remove("active");
  pages[pages.length - 3].classList.add("active");
});

// initialize first page
showPage(currentPage);

// When the plan box is clicked, add active class
const planBoxes = document.querySelectorAll(".plan-box");
planBoxes.forEach((planBox) => {
  planBox.addEventListener("click", () => {
    planBox.classList.toggle("active");
  });
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
    // If the click target is NOT the checkbox itself, then toggle the checkbox
    if (e.target !== childCheckbox) {
      // Toggle the checkbox
      childCheckbox.checked = !childCheckbox.checked;

      // Manually trigger the "change" handler, so the active class updates
      childCheckbox.dispatchEvent(new Event("change", { bubbles: true }));
    }
  });
});

// -------------------------------------
// SUMMARY
// -------------------------------------

const selectedPlan = document.querySelector(".selected-plan");
const selectedPlanDuration = document.querySelector(".selected-plan-mon-yr");
const selectedPlanPrice = document.querySelector(".selected-plan-price");
const selectedAddon1 = document.querySelector(".selected-add-on-1");
const selectedAddon2 = document.querySelector(".selected-add-on-2");
const selectedAddPrice1 = document.querySelector(".selected-add-price");
const selectedAddPrice2 = document.querySelector(".selected-add-price-2");
const totalDuration = document.querySelector(".total-duration");
const totalPrice = document.querySelector(".total-price");

// const planTitles = document.querySelectorAll(".plan-title");
// function to update the summary based on selected plan
// const updatePlanSummary = function () {
//   // check if yearly/monthly is selected
//   const isYearly = toggleButton.checked;

//   // Get the selected plan
//   // const activePlan = document.querySelector(".plan.active");
//   const activePlan = document.querySelector(".plan-box.active");

//   const planName = activePlan.querySelector(".plan-title").textContent;
//   const planPrice = activePlan
//     ? parseFloat(activePlan.querySelector(".plan-price.yearly").textContent)
//     : parseFloat(activePlan.querySelector(".plan-price.monthly").textContent);

//   // update the summary
//   selectedPlan.textContent = planName;
//   selectedPlanDuration.textContent = isYearly ? "/yr" : "/mo";
//   selectedPlanPrice.textContent = `$${planPrice}`;
//   // update total duration
//   totalDuration.textContent = isYearly ? "Yearly" : "Monthly";

//   return planPrice;
// };

// // Function to update the summary based on selected add-ons
// const updateAddOnSummary = () => {
//   const selectedAddOns = [];
//   const selectedAddPrices = [];
//   let totalAddOnPrice = 0;

//   // Check which add-ons are active
//   addonElements.forEach((addOnEl) => {
//     const childCheckbox = addOnEl.querySelector(".add-checkbox");
//     if (childCheckbox.checked) {
//       const addOnName = addOnEl.querySelector(".add-on-name").textContent;
//       const addOnPrice = parseFloat(
//         addOnEl.querySelector(
//           `.add-on-price.${toggleButton.checked ? "yearly" : "monthly"}`
//         ).textContent
//       );
//       // get add on price
//       selectedAddOns.push(addOnName);
//       selectedAddPrices.push(addOnPrice);
//       totalAddOnPrice += addOnPrice;
//     }
//   });

//   // Update the summary with add-ons
//   selectedAddon1.textContent = selectedAddOns[0] || ""; // First add-on
//   selectedAddPrice1.textContent = selectedAddPrices[0]
//     ? `$${selectedAddPrices[0]}`
//     : ""; // Price for the first add-on
//   selectedAddon2.textContent = selectedAddOns[1] || ""; // Second add-on (optional)
//   selectedAddPrice2.textContent = selectedAddPrices[1]
//     ? `$${selectedAddPrices[1]}`
//     : ""; // Price for the second add-on (optional)

//   return totalAddOnPrice; // Return the total add-on price for total calculation
// };

// // Function to calculate and update the total price
// const updateTotalPrice = () => {
//   const planPrice = updatePlanSummary(); // Get the plan price
//   const addOnPrice = updateAddOnSummary(); // Get the total add-on price
//   const total = planPrice + addOnPrice;

//   // Update the total price
//   totalPrice.textContent = `$${total}`;
// };

// // Event listener for the plan checkbox (monthly/yearly toggle)
// toggleButton.addEventListener("change", updateTotalPrice);

// // Event listener for add-ons
// addonElements.forEach((addOnEl) => {
//   const childCheckbox = addOnEl.querySelector(".add-checkbox");
//   childCheckbox.addEventListener("change", updateTotalPrice);
// });

// // Call the update function initially to set the summary
// updateTotalPrice();

// Function to update the summary page
const updateSummary = () => {
  // Get selected plan
  const selectedPlanElement = document.querySelector(".plan-box.active"); // Ensure selected plan has an "active" class
  const isYearly = toggleButton.checked;

  // Update plan details
  if (selectedPlanElement) {
    const planName =
      selectedPlanElement.querySelector(".plan-title").textContent;
    const planPrice = isYearly
      ? selectedPlanElement.querySelector(".yearly-price").textContent
      : selectedPlanElement.querySelector(".monthly-price").textContent;

    selectedPlan.textContent = planName;
    selectedPlanDuration.textContent = isYearly ? " (Yearly)" : " (Monthly)";
    selectedPlanPrice.textContent = planPrice;
  }

  // Update add-on details
  const selectedAddons = [];
  let totalAddOnPrice = 0;

  addonElements.forEach((addOnEl) => {
    const checkbox = addOnEl.querySelector(".add-checkbox");
    if (checkbox.checked) {
      const addOnName = addOnEl.querySelector(".add-on-title").textContent;
      const addOnPrice = isYearly
        ? addOnEl.querySelector(".yearly-bonus").textContent
        : addOnEl.querySelector(".monthly-bonus").textContent;

      selectedAddons.push({ name: addOnName, price: addOnPrice });
      totalAddOnPrice += parseFloat(addOnPrice.replace(/[^0-9.]/g, ""));
    }
  });

  // Clear existing add-ons in the summary
  document
    .querySelectorAll(".dynamic-add-on")
    .forEach((element) => element.remove());

  // Add selected add-ons to the summary
  const dynamicContainer = document.querySelector(".dynamic-container");
  selectedAddons.forEach((addon, index) => {
    const addOnDiv = document.createElement("div");
    addOnDiv.classList.add("dynamic-div", "dynamic-add-on");

    const addOnName = document.createElement("p");
    addOnName.textContent = addon.name;
    addOnDiv.appendChild(addOnName);

    const addOnPrice = document.createElement("p");
    addOnPrice.textContent = addon.price;
    addOnDiv.appendChild(addOnPrice);

    dynamicContainer.appendChild(addOnDiv);
  });

  // Calculate total price
  const planPriceValue = parseFloat(
    selectedPlanPrice.textContent.replace(/[^0-9.]/g, "")
  );
  const totalPriceValue = planPriceValue + totalAddOnPrice;

  // Update total price and duration
  totalPrice.textContent = `+$${totalPriceValue}/${isYearly ? "yr" : "mo"}`;
  totalDuration.textContent = isYearly ? "(per year)" : "(per month)";
};

// Event listeners for updates
toggleButton.addEventListener("change", updateSummary); // Update on toggle button change
addonElements.forEach((addOnEl) => {
  const checkbox = addOnEl.querySelector(".add-checkbox");
  checkbox.addEventListener("change", updateSummary); // Update on add-on checkbox change
});

// Ensure to call updateSummary whenever the user navigates to the summary page
nextBtn.addEventListener("click", () => {
  if (currentPage === pages.length - 1) {
    updateSummary(); // Update summary only when on the last page
  }
});
