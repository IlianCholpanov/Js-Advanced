function counterBuilder() {
    let counter = 0;

    return function () {
        counter++;
        console.log(counter);
    }
}

let counter = counterBuilder();
let counter2 = counterBuilder();


function alertFun(message) {

    return () => {
        console.log(`! ${message}`);
    }
}

const alertMom = alertFun('hi Mom');

alertMom();

