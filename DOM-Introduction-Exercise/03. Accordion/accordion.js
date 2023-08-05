function toggle() {
    let buttonElement = document.getElementsByClassName('button')[0];
    let displayStyleElement = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        buttonElement.textContent = 'Less';
        displayStyleElement.style.display = 'block';
    } else {
        buttonElement.textContent = 'More';
        displayStyleElement.style.display = 'none';
    }

}