const sum = require('./04-sum-of-numbers');
const assert = require('chai').assert;

describe('Sum of Numbers', () => {
    it('Should return the sum of the Number in array', () => {
        let numbers = [1, 2, 3, 4, 5, 6];
        let expectedSum = 21;
        let actualSum = sum(numbers);

        assert.equal(actualSum, expectedSum);
    });
});