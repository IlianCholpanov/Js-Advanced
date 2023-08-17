function lockedProfile() {
    const SHOW_MORE = 'Show more';
    const HIDE_IT = 'Hide it';

    const buttonElements = Array.from(document.querySelectorAll("div button"));

    for (const button of buttonElements) {


        button.addEventListener("click", show);
    }

    function show(e) {
        const divChildren = Array.from(e.target.parentElement.children);
        const isLocked = divChildren[2].checked;

        if (isLocked) {
            return;
        }

        const hiddenFeildElements = e.target.previousElementSibling;
        if (e.target.textContent === SHOW_MORE) {
            hiddenFeildElements.style.display = 'inline';
            e.target.textContent = HIDE_IT;
        } else {
            hiddenFeildElements.style.display = 'none';
            e.target.textContent = SHOW_MORE;
        }

    }
}