function sortByTwoCriteria(arr) {

    const sortedArr = arr.sort((a, b) => {
        const firstCriteria = a.length - b.length;
        const secondCritieria = a.localeCompare(b);
        return firstCriteria || secondCritieria;
    });

    console.log(sortedArr.join('\n'));

}
sortByTwoCriteria([
    'alpha',
    'beta',
    'gamma'
])