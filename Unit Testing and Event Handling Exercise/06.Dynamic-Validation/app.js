function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange(event) {
        let regex = /[a-z]+@[a-z]+\.[a-z]+/gm;
        if (regex.test(event.target.value)) {
            event.target.classList.remove('error');
        } else {
            event.target.classList.add('error');
        }
    }
}