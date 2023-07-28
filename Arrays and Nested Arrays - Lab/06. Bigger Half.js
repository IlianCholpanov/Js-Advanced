function biggerHalf(arr) {
    let result = [];
    arr.sort((a, b) => a - b);
    let halflength = Math.ceil(arr.length / 2);
    for (let i = arr.length - 1; i >= arr.length - halflength; i--) {
        result.push(arr[i]);
    }

    result.reverse();
    return result;

}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));
console.log(biggerHalf([4, 7, 2, 5]));