function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]');
    let emailRowElement = document.querySelectorAll('tr td:nth-of-type(2)');
    let resultDivElement = document.getElementById('result');

    let emailElements = Array.from(emailRowElement);
    let targetElements = emailElements.find(x => x.textContent == emailInputElement.value);

    if (targetElements) {
        targetElements.parentNode.remove();
        resultDivElement.textContent = 'Deleted.';
    } else {
        resultDivElement.textContent = 'Not found.';
    }
    
}