function biggestElement(matrix) {

    let biggestNum = Number.NEGATIVE_INFINITY;
    matrix.forEach(row => row.forEach(
            col => biggestNum = Math.max(biggestNum, col)));
    console.log(biggestNum);
}


biggestElement([ 
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]
);
biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]
)