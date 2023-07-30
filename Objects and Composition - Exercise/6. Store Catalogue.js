function storeCatalogue(input) {
    let dictionary = {};

    let sortedInput = input.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < sortedInput.length; i++) {
        const element = sortedInput[i]
            .split(' : ')
            .join(': ');
        const firstLetter = element[0];

        if (dictionary[firstLetter] === undefined) {
            dictionary[firstLetter] = [];
        }

        dictionary[firstLetter].push(`  ${element}`)
    }

    let output = [];
    for (const key in dictionary) {
        const element = dictionary[key];
        output = [...output, key, ...element];
    }

    // console.log(output.join('\n'));
    return output.join('\n');

}
storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])