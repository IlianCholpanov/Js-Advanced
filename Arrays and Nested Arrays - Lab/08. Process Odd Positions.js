function processOddPositions(arr) {
    let newArr = arr
        .filter((x, i) => i % 2 === 1)
        .map(x => x * 2)
        .reverse()
        .join(' ');

    console.log(newArr);
}
processOddPositions([10, 15, 20, 25])