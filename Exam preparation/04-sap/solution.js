window.addEventListener("load", solution);

function solution() {
  const sumbitButtonElement = document.getElementById("submitBTN");
  const infoPreviewList = document.getElementById("infoPreview");
  const editButtonElement = document.getElementById("editBTN");
  const block = document.getElementById("block");
  const continueButtonElement = document.getElementById("continueBTN");

  sumbitButtonElement.disabled = false;
  editButtonElement.disabled = true;
  continueButtonElement.disabled = true;

  const inputValues = Array.from(
    document.getElementById("form").querySelectorAll("input")
  );
  const labelValues = Array.from(
    document.getElementById("form").querySelectorAll("label")
  );
  inputValues.pop();

  sumbitButtonElement.addEventListener("click", (e) => {
    const fullName = inputValues[0];
    const email = inputValues[1];

    if (fullName.value && email.value != "") {
      for (let i = 0; i < inputValues.length; i++) {
        const liElement = document.createElement("li");
        liElement.innerHTML = `${labelValues[i].innerText} ${inputValues[i].value}`;
        infoPreviewList.appendChild(liElement);
      }

      e.target.disabled = true;
      editButtonElement.disabled = false;
      continueButtonElement.disabled = false;
    }
    for (let input of inputValues) {
      input.value = "";
    }
  });

  editButtonElement.addEventListener("click", (e) => {
    const listItems = Array.from(infoPreviewList.childNodes);
    for (let i = 0; i < inputValues.length; i++) {
      inputValues[i].value = listItems[i].textContent.split(": ")[1];
      listItems[i].remove();
    }

    sumbitButtonElement.disabled = false;
    editButtonElement.disabled = true;
    continueButtonElement.disabled = true;
  });

  continueButtonElement.addEventListener("click", (e) => {
    block.innerHTML = "";

    let h3 = document.createElement("h3");
    h3.textContent = "Thank you for your reservation!";

    block.appendChild(h3);
  });
}
