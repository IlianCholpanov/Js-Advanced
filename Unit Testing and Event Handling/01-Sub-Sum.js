function solve(numbers, start, end) {
    if (!Array.isArray(numbers)) {
        return NaN;
    }

    let startIndex = Math.max(start, 0);
    let endIndex = Math.min(end, numbers.length - 1);

    let sum = numbers.slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((acc, x) => acc + x, 0);

    return sum;
}
console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));


function test() {
    let actualSum = solve([10, 20, 30, 40, 50, 60], 3, 300);
    let expectedSum = 150;

    if (actualSum == expectedSum) {
        console.log('Correct');
    } else {
        console.log('Error');
    }
}
test();