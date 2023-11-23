window.addEventListener("load", solution);

function solution() {
  const sumbitButtonElement = document.getElementById("submitBTN");
  const fNameInputElement = document.getElementById("fname");
  const emailInputElement = document.getElementById("email");
  const phoneNumberInputElement = document.getElementById("phone");
  const addressInputElement = document.getElementById("address");
  const postCodeInputElement = document.getElementById("code");

  sumbitButtonElement.addEventListener("click", (e) => {
    e.preventDefault();

    const fullName = fNameInputElement.value;
    const email = emailInputElement.value;
    const phone = phoneNumberInputElement.value;
    const address = addressInputElement.value;
    const postCode = postCodeInputElement.value;
  });
}
