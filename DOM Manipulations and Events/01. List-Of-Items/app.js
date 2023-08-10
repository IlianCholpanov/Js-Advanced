function addItem() {
    let userInputElement = document.getElementById('newItemText').value;
    let ulElement = document.getElementById('items');
    let nextItemElement = document.createElement('li');

    nextItemElement.textContent = userInputElement;
    ulElement.appendChild(nextItemElement);
}