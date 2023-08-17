function addItem() {
    let selectMenuElement = document.getElementById('menu');
    let newItemElement = document.getElementById('newItemText');
    let newValueElement = document.getElementById('newItemValue');
    let buttonElement = document.querySelector('[type = button]');

    let optionElement = document.createElement('option');

    optionElement.textContent = newItemElement.value;
    optionElement.value = newValueElement.value;

    selectMenuElement.appendChild(optionElement);

    newItemElement.value = '';
    newValueElement.value = '';

}