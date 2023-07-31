function colorize() {
    let rowElements = document.querySelectorAll('table tr');

    let index = 0;

    for (const row of rowElements) {
        index++;
        if (index % 2 == 0) {
            row.style.background = 'teal';
        }
    }
}