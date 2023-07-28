function diagonalSums(matrix) {
    let innerArr = matrix[0];
    let sumMain = 0;
    let secondSum = 0;

    for (let i = 0, j = innerArr.length - 1; i < matrix.length; i++, j--) {
        let mainDiagonalElement = matrix[i][i];
        let secondDiagonalElement = matrix[i][j];
        sumMain += mainDiagonalElement;
        secondSum += secondDiagonalElement;
    }

    console.log(`${sumMain} ${secondSum}`);
}
diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);