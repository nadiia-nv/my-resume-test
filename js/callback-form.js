const callbackForm = document.querySelector(".callback-form-container");
const requestReceivedModal = document.querySelector("#request-received");

const userName = document.querySelector("#callback-form-input-name");
const userMail = document.querySelector("#callback-form-input-mail");
const userPhone = document.querySelector("#callback-form-input-phone");

userPhone.addEventListener("click", function () {
  if (!userPhone.value.trim()) {
    userPhone.value = "+380";
  }
});

userPhone.addEventListener("blur", function () {
  if (userPhone.value === "+380") {
    userPhone.value = "";
  }
});

callbackForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let hasError = false;

  if (!userName.value.trim()) {
    userName.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    userName.classList.remove("callback-form-input-error");
  }

  if (!userMail.value.trim() || !isEmailValid(userMail.value)) {
    userMail.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    userMail.classList.remove("callback-form-input-error");
  }

  if (!userPhone.value.trim() || !isPhoneValid(userPhone.value)) {
    userPhone.classList.add("callback-form-input-error");
    hasError = true;
  } else {
    userPhone.classList.remove("callback-form-input-error");
  }

  if (hasError) {
    return;
  }

  userName.value = "";
  userMail.value = "";
  userPhone.value = "";

  requestReceivedModal.classList.add("modal-active");

  setTimeout(function () {
    requestReceivedModal.classList.remove("modal-active");
  }, 2000);
});

function isPhoneValid(phone = "") {
  const regexp = /(\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4})/;

  return phone.match(regexp);
}

function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}
