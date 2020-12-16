const form = document.getElementById("form");
const user = document.getElementById("Username");

const email = document.getElementById("Email");
const pass = document.getElementById("Password");
const pass2 = document.getElementById("confirm-password");

//checking required fields
function checkRequired(inputArr) {
  inputArr.forEach((element) => {
    if (element.value.trim() === "") {
      showError(element, `${getFieldName(element)} is required`);
    } else {
      showSuccess(element);
    }
    console.log(element.value);
  });
}

//checking email
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (input.value === "") {
    showError(input, `${getFieldName(input)} is required`);
  } else if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, `Email is not valid`);
  }
}

//check input checkLength
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be atleast ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// check passwords
function checkPasswords(pass1, pass2) {
  if (pass1.value !== pass2.value) {
    showError(pass2, `Passwords do not match`);
  }
}

//get field Name
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//show error messages
function showError(input, message) {
  console.log("hello");
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control error";
  const small = formcontrol.querySelector("small");
  small.textContent = message;
}

//input success
function showSuccess(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = "form-control success";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([user, email, pass, pass2]);
  checkLength(user, 3, 15);
  checkLength(pass, 6, 20);
  checkEmail(email);
  checkPasswords(pass, pass2);
});
