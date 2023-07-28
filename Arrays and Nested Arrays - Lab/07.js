function pieceOfPie(arr, pie1, pie2) {
    const firstPie = arr.indexOf(pie1);
    const secondPie = arr.indexOf(pie2) + 1;

    const result = arr.slice(firstPie, secondPie);
    return result;
}
console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'))