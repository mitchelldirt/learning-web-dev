// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // if the email field is valid, we let the form submit

  if (!email.validity.valid) {
    // If it isn't, we display an appropriate error message
    showError();
    // Then we prevent the form from being sent by canceling the event
    event.preventDefault();
  } else if (!zipCodeBox.validity.valid) {
    showZipCodeError()
    event.preventDefault()
  } else if (passwordValid === false) {
    event.preventDefault();
  } else if (confirmStatus === false) {
    event.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }

  // Set the styling appropriately
  emailError.className = 'error active';
}

const zipCodeBox = document.getElementById("zip");
const errorZip = document.getElementById("errorZip");

zipCodeBox.addEventListener("input", function (event) {
  if (zipCodeBox.validity.valid) {
    errorZip.textContent = '';
    errorZip.className = "errorZip";
  } else {
    showZipCodeError();
  }
})

function showZipCodeError() {
  if (zipCodeBox.validity.patternMismatch) {
    errorZip.textContent = "Only numbers please :)"
  } else if (zipCodeBox.validity.tooShort) {
    errorZip.textContent = "Minimum 4 numbers"
  } else if (zipCodeBox.validity.tooLong) {
    errorZip.textContent = "Maximum 6 numbers";
  }
}

let passwordValid = false;
const passwordInput = document.getElementById("pass");
const req1 = document.getElementById("req1");
const req2 = document.getElementById("req2");
const req3 = document.getElementById("req3");
const req4 = document.getElementById("req4");

const pattern1 = new RegExp("[A-Z]");
const pattern2 = new RegExp("[0-9]");
const pattern3 = new RegExp("[!@#\$%&\*\(\)\+=\^\._-]");

passwordInput.addEventListener("input", function (event) {
  let currentInput = passwordInput.value;
  passwordValid = true;
  if (pattern1.test(currentInput) === true) {
    req1.style.backgroundColor = "green"
  } else {
    passwordValid = false;
    req1.style.backgroundColor = "red";
  }
  
  if (pattern2.test(currentInput) === true) {
    req2.style.backgroundColor = "green"
  } else {
    passwordValid = false;
    req2.style.backgroundColor = "red";
  }
  
  if (pattern3.test(currentInput) === true) {
    req3.style.backgroundColor = "green"
  } else {
    passwordValid = false;
    req3.style.backgroundColor = "red";
  }
  
  if (currentInput.length >= 8) {
    req4.style.backgroundColor = "green"
  } else {
    passwordValid = false;
    req4.style.backgroundColor = "red";
  }
})

const confirmPass = document.getElementById("confirmPass");
const errorPass = document.getElementById("errorPass");
let confirmStatus = false;
confirmPass.addEventListener("input", function (event) {
  if (confirmPass.value === document.getElementById("pass").value) {
    errorPass.textContent = '';
    errorPass.className = "errorPass";
    confirmStatus = true;
  } else {
    confirmStatus = false;
    showConfirmPassError();
  }
})

function showConfirmPassError() {
  errorPass.textContent = "Passwords must match"
}