function squareOfStars(input) {
    for (let i = 1; i <= input; i++) {
        console.log('*' + ' *'.repeat(input - 1));
    }
}
squareOfStars(5);