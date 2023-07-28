function greatestCommonDivisor(num1, num2) {
    let divisor;

    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            divisor = i
        }
    }

    console.log(divisor);
}
greatestCommonDivisor(2154, 458);