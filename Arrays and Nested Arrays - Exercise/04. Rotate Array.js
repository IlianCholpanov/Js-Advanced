function rotateArray(arr, rotationCounter) {
    for (let i = 0; i < rotationCounter; i++) {
        let newArr = arr.pop();
        arr.unshift(newArr);
    }
    console.log(arr.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple'], 15);