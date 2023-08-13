function addItem() {
    let userInputElement = document.getElementById('newItemText').value;
    let ulElement = document.getElementById('items');
    
    let nextItemElement = document.createElement('li');
    nextItemElement.textContent = userInputElement;

    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = '[Delete]';
    deleteElement.addEventListener('click', () =>{
        nextItemElement.remove();
    })

    nextItemElement.appendChild(deleteElement);
    ulElement.appendChild(nextItemElement);
}