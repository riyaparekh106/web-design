//Email validation

const nameInput = document.querySelector("#register-name__input");

// Error fields
const nameError = document.querySelector(".register-name__error");
const emailError = document.querySelector(".register-email__error");
const confirmEmailError = document.querySelector(
  ".register-confirm-email__error"
);

function validateName(name) {
  if (!name.trim()) {
    nameError.classList.add("show-error");
    return false;
  } else {
    nameError.classList.remove("show-error");
    return true;
  }
}

nameInput.addEventListener("blur", function (e) {
  e.preventDefault();
  validateName(nameInput.value);
});

const registrationForm = document.querySelector("#registration-form");

registrationForm.addEventListener("submit", function (e) {
  const name = registrationForm.elements["name"].value;
  const email = registrationForm.elements["email"].value.trim();
  const confirmEmail = registrationForm.elements["confirmEmail"].value;
  let formValid = true;

  formValid = validateName(name);

  if (!email) {
    emailError.innerText = "Email field is required.";
    formValid = false;
  } else {
    emailError.innerText = "";
  }

  if (confirmEmail != email) {
    confirmEmailError.innerText = "Email fields must match.";
    formValid = false;
  } else {
    confirmEmailError.innerText = "";
  }

  if (!formValid) {
      e.preventDefault();
  }
});