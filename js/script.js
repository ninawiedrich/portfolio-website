(function () {
  let form = document.querySelector("#register-form");
  let emailInput = document.querySelector("#email");

  function showErrorMessage(input, message) {
      let container = input.parentElement; // The .input-wrapper

      // Check and Remove any existing errors
      let error = container.querySelector(".error-message");
      if (error) {
          container.removeChild(error);
      }

      // Now add the error if the message isn’t empty
      if (message) {
          let error = document.createElement("div");
          error.classList.add("error-message");
          error.innerText = message;
          container.insertAdjacentElement("beforeend", error); // Add error message at the end of the .input-wrapper
      }
  }

  function validateEmail() {
      let value = emailInput.value;

      if (!value) {
          showErrorMessage(emailInput, "Email is a required field.");
          return false;
      }

      if (value.indexOf("@") === -1) {
          showErrorMessage(emailInput, "You must enter a valid email address.");
          return false;
      }

      if (value.indexOf(".") === -1) {
          showErrorMessage(emailInput, "You must enter a valid email address.");
          return false;
      }

      showErrorMessage(emailInput, null);
      return true;
  }

  function validateForm() {
      let isValidEmail = validateEmail();
      return isValidEmail;
  }

  form.addEventListener("submit", (e) => {
      if (!validateForm()) {
          e.preventDefault(); // Prevent submission if the form is not valid
      }
  });

  emailInput.addEventListener("input", validateEmail);
})();
