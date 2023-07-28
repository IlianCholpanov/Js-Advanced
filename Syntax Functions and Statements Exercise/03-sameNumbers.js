function sameNumbers(num) {

    let arr = num.toString().split('');
    let sum = 0;
    let flag = true;

    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (arr[0] !== currentNum) {
            flag = false;
        }
        sum += Number(currentNum);
    }
    console.log(flag);
    console.log(sum);
}
sameNumbers(1234);