function aggregateElements(array) {
    let numbersArray = array.map(Number);
    let sumA = 0;
    for (let num of numbersArray) {
        sumA += num;
    }

    let inversiveSum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        inversiveSum += 1 / numbersArray[i];
    }

    let concat = numbersArray.join('');

    console.log(sumA);
    console.log(inversiveSum);
    console.log(concat);
}
aggregateElements([1, 2, 3]);