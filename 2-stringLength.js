function stringLength(str1, str2, str3) {
    let sumLength;
    let averageLength;

    let firstStrLength = str1.length;
    let secondStrLength = str2.length;
    let thirdStrLength = str3.length;

    sumLength = firstStrLength + secondStrLength + thirdStrLength;
    averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}
stringLength('chocolate', 'ice cream', 'cake');