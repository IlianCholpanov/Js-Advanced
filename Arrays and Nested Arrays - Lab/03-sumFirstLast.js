function sumFirstLast(arr) {
    let first = Number(arr[0]);
    let last = Number(arr[arr.length - 1]);

    let result = first + last;
    console.log(result);
}
sumFirstLast(['20', '30', '40']);