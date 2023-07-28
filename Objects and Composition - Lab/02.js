function townPopulation(array) {

    let obj = {};

    for (let i of array) {
        let [city, population] = i.split(' <-> ');

        if (obj[city]) {
            obj[city] += Number(population);
        } else {
            obj[city] = Number(population);
        }

    }

    for (const key in obj) {
        console.log(`${key} : ${obj[key]}`);
    }
}