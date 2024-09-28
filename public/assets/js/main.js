const validationFeedback = document.getElementById("validationFeedback");
const emailInput = document.getElementById("email");
const errorIcon = document.getElementById("errorIcon");
const submitButton = document.getElementById("submit");

emailInput.addEventListener("input", (e) => {
  e.preventDefault();

  emailValidation(emailInput);
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if(emailInput.value === '') {
    validationFeedback.textContent = "Email's required and can't be empty";
  }
});

function emailValidation(email) {
  emailValue = email.value;
  if (validator.isEmail(emailValue)) {
    validationFeedback.textContent = "";
    emailInput.classList.remove("border-clrRed-soft");
    emailInput.classList.add("border-clrRed-desaturated");
    if (!errorIcon.classList.contains("hidden")) {
      errorIcon.classList.add("hidden");
    }
  } else {
    validationFeedback.textContent = "Please provide a valid email";
    // emailInput.classList.add("border-clrRed-soft");
    emailInput.classList.add("border-clrRed-soft");
    emailInput.classList.remove("border-clrRed-desaturated");
    if (errorIcon.classList.contains("hidden")) {
      errorIcon.classList.remove("hidden");
    }
  };
}
