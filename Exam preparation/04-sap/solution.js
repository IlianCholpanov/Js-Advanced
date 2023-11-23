window.addEventListener("load", solution);

function solution() {
  const sumbitButtonElement = document.getElementById("submitBTN");
  const fNameInputElement = document.getElementById("fname");
  const emailInputElement = document.getElementById("email");
  const phoneNumberInputElement = document.getElementById("phone");
  const addressInputElement = document.getElementById("address");
  const postCodeInputElement = document.getElementById("code");
  const infoPreviewList = document.getElementById("infoPreview");
  const editButtonElement = document.getElementById("editBTN");
  const continueButtonElement = document.getElementById("continueBTN");

  sumbitButtonElement.addEventListener("click", (e) => {
    e.preventDefault();
    const fullName = fNameInputElement.value;
    const email = emailInputElement.value;
    const phone = phoneNumberInputElement.value;
    const address = addressInputElement.value;
    const postCode = postCodeInputElement.value;

    const fullNameListItemElement = document.createElement("li");
    const emailListItemElement = document.createElement("li");
    const phoneListItemElement = document.createElement("li");
    const addressListItemElement = document.createElement("li");
    const postCodeListItemElement = document.createElement("li");

    fullNameListItemElement.textContent = ` Full Name: ${fullName}`;
    emailListItemElement.textContent = `Email: ${email}`;
    phoneListItemElement.textContent = `Phone Number: ${phone}`;
    addressListItemElement.textContent = `Address: ${address}`;
    postCodeListItemElement.textContent = `Postal Code: ${postCode}`;

    infoPreviewList.appendChild(fullNameListItemElement);
    infoPreviewList.appendChild(emailListItemElement);
    infoPreviewList.appendChild(phoneListItemElement);
    infoPreviewList.appendChild(addressListItemElement);
    infoPreviewList.appendChild(postCodeListItemElement);

    sumbitButtonElement.disabled = true;
    editButtonElement.disabled = false;
    continueButtonElement.disabled = false;

    editButtonElement.addEventListener("click", (e) => {});

    if (!fullName.textContent == "" && !email.textContent == "") {
      continueButtonElement.addEventListener("click", (e) => {});
    }
  });
}
