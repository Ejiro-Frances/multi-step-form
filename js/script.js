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

// grab the plan boxes
const planBoxes = document.querySelectorAll(".plan-box");

// get the prices
const monthlyPrice = document.querySelectorAll(".monthly-price");
const yearlyPrice = document.querySelectorAll(".yearly-price");
const yearlyDuration = document.querySelectorAll(".yearly-duration");
const emptyPrice = document.querySelectorAll(".empty-p");

// get input from form
const userNameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const userTelephoneInput = document.querySelector("#tel-number");

// for summary
const selectedPlan = document.querySelector(".selected-plan");
const selectedPlanDuration = document.querySelector(".selected-plan-mon-yr");
const selectedPlanPrice = document.querySelector(".selected-plan-price");

const selectedAddon1 = document.querySelector(".selected-add-on-1");
const selectedAddon2 = document.querySelector(".selected-add-on-2");
const selectedAddPrice1 = document.querySelector(".selected-add-price");
const selectedAddPrice2 = document.querySelector(".selected-add-price-2");

const totalDuration = document.querySelector(".total-duration");
const totalPrice = document.querySelector(".total-price");

// Error for plan selection
const planError = document.querySelector(".plan-error");

// When a button is clicked, the hide class should be remove from one place and added to another

let currentPage = 0;

// Function to update the button text and visibility
const updateButtonState = function () {
  if (currentPage === 0) {
    backBtn.style.opacity = "0";
    nextBtn.textContent = "Next Step";
  } else if (currentPage === pages.length - 2) {
    backBtn.style.opacity = "1";
    nextBtn.style.opacity = "1";
    nextBtn.textContent = "Confirm";
    nextBtn.style.backgroundColor = "hsl(243, 100%, 62%)";
  } else if (currentPage === pages.length - 1) {
    backBtn.style.opacity = "0";
    nextBtn.style.opacity = "0";
  } else {
    backBtn.style.opacity = "1";
    nextBtn.style.opacity = "1";
    nextBtn.textContent = "Next Step";
    nextBtn.style.backgroundColor = "hsl(213, 96%, 18%)";
  }
};

// Function to show pages

const showPage = (index) => {
  pages.forEach((page, i) => {
    page.classList.toggle("active", i === index);
  });
  updateButtonState();
};

// update step buttons
const updateStepButtons = () => {
  stepBtns.forEach((button, index) => {
    button.classList.toggle("active", index === currentPage);
  });
};

// when the back button is clicked, it shows previous page
backBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
    updateStepButtons();
  }
});

// When the next button is clicked, validate form and plan selection before moving to the next page
nextBtn.addEventListener("click", () => {
  const selectPlanPageIndex = 1; // Replace with the actual index of your "Select Plan" page
  const selectedPlanEl = document.querySelector(".plan-box.active");

  // Validate the Select Plan page
  if (currentPage === selectPlanPageIndex) {
    if (!selectedPlanEl) {
      // Show error message if no plan is selected
      planError.classList.remove("hide");
      return; // Prevent navigation to the next page
    } else {
      // Hide error message if a plan is selected
      planError.classList.add("hide");
    }
  }

  // Proceed to the next page only if validation passes
  if (
    currentPage < pages.length - 1 &&
    userNameInput.value !== "" &&
    userTelephoneInput.value !== "" &&
    userTelephoneInput.value !== 11 &&
    !emailInput.value.match(/^[A-Za-z]{1}[@]$/)
  ) {
    currentPage++;
    showPage(currentPage);
    updateStepButtons();
  }

  if (userNameInput.value === "") {
    userNameInput.classList.add("error");
    document.querySelector(".username-error").classList.remove("hide");
  } else if (!emailInput.value.match(/^[A-Za-z]{1}[@]$/)) {
    emailInput.classList.add("error");
    document.querySelector(".email-error").innerHTML =
      "Enter a valid email address";
  } else if (userTelephoneInput.value.length === 0) {
    userTelephoneInput.classList.add("error");
    document.querySelector(".tel-error").innerHTML = "This field is required";
  } else if (userTelephoneInput.value !== 11) {
    userTelephoneInput.classList.add("error");
    document.querySelector(".tel-error").innerHTML =
      "Phone number should be 11 digits";
  } else {
    document.querySelectorAll("input").forEach((el) => {
      el.classList.remove("error");
      document.querySelector(".email-error").innerHTML = "";
    });
  }
});

// When the change plan button on the summary page is clicked, it should go to the plan page
changePlanBtn.addEventListener("click", () => {
  pages[pages.length - 2].classList.remove("active");
  pages[pages.length - 4].classList.add("active");
});

// initialize first page
showPage(currentPage);
updateStepButtons();

// When the plan box is clicked, add active class

planBoxes.forEach((planBox) => {
  planBox.addEventListener("click", () => {
    // Remove the 'active' class from all plans
    planBoxes.forEach((box) => box.classList.remove("active"));
    //Add the 'active, class to the clicked plan

    planBox.classList.add("active");
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
  const addOns = document.querySelectorAll(".dynamic-add-on");

  addOns.forEach((element) => element.remove());

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
