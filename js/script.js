//  grab buttons for the next  and back page
const infoNextButton = document.querySelector("#info-btn");
const stepBackButton = document.querySelector("#step-bck-btn");
const stepFwdButton = document.querySelector("#step-fwd-btn");

// grab buttons for the side bar
const step1Btn = document.querySelector("#step-1");
const step2Btn = document.querySelector("#step-2");

// grab the different pages
const personalInfoContainer = document.querySelector("#personal-info");
const selectPlanContainer = document.querySelector("#select-plan");
const addOnContainer = document.querySelector("#addon-box");
// const selectPlanContainer = document.querySelector("#select-plan");

// get the prices
const monthlyPrice = document.querySelectorAll(".monthly-price");
const yearlyPrice = document.querySelectorAll(".yearly-price");
const yearlyDuration = document.querySelectorAll(".yearly-duration");
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
// when the input element is clicked, i want the monthly or yearly plan to show
const toggleButton = document.querySelector(".plan-checkbox");
toggleButton.addEventListener("click", () => {
  monthlyPrice.forEach((mp) => {
    if (toggleButton.checked) {
      console.log("yay");
      mp.classList.add("hide");
    } else {
      mp.classList.remove("hide");
    }
  });

  yearlyPrice.forEach((yp) => {
    if (toggleButton.checked) {
      console.log("yay");
      yp.classList.remove("hide");
    } else {
      yp.classList.add("hide");
    }
  });

  yearlyDuration.forEach((yd) => {
    if (toggleButton.checked) {
      console.log("may");
      yd.classList.remove("hide");
    } else {
      yd.classList.add("hide");
    }
  });
});