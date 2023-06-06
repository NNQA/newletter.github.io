const containerEl = document.getElementById("container");
const left = document.getElementById("left");
const right = document.getElementById("right");

const userEmailEL = document.getElementById("user-email");
const invalidEmail = document.getElementById("invalid-email");
const emailInput = document.getElementById("email");
const submitBtnEl = document.getElementById("submit-btn");

const conFirmMessageEl = document.getElementById("comfirm-message");
const dissmissMessage = document.getElementById("dismiss-message");

console.log(conFirmMessageEl, containerEl);
function formSuccess() {
  conFirmMessageEl.classList.add("active");
  containerEl.classList.add("success");
  left.style.display = "none";
  right.style.display = "none";
}

function validateEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);
}
submitBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
  const email = emailInput ? emailInput.value.trim() : "";
  console.log(email);
  if (validateEmail(email)) {
    formSuccess();
    userEmailEL.innerText = email;
    emailInput = "";

    invalidEmail.classList.remove("active");
    emailInput.classList.remove("active");
  } else {
    invalidEmail.classList.add("active");
    emailInput.classList.add("active");
  }
});

dissmissMessage.addEventListener("click", () => {
  left.style.display = "block";
  right.style.display = "block";
  containerEl.classList.remove("success");
  conFirmMessageEl.classList.remove("active");
});
