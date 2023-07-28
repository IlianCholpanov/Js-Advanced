function smallestTwoNumbers(arr) {
    let result = [];

    for (let i = 0; i <= arr.length; i++) {
        arr.sort((a, b) => a - b);
    }

    result = arr.slice(0, 2);
    console.log(result.join(' '));

}
smallestTwoNumbers([30, 15, 50, 5])