const isOddOrEven = require('./02-even-odd');
const { assert } = require('chai');

describe('isOddOrEven function tests', () => {
    // Validation tests
    it('should check if the arguiment is a number', () => {
        assert.equal(isOddOrEven(13),undefined);
    });
    it('should check if the arguiment is an array', () => {
        assert.equal(isOddOrEven([]),undefined);
    });
    it('should check if the arguiment is an object', () => {
        assert.equal(isOddOrEven({}),undefined);
    });
    // Functionality tests
    it('should return even', () => {
        assert.equal(isOddOrEven('Hi'),'even');
    });
    it('should return odd', () => {
        assert.equal(isOddOrEven('Hello'),'odd');
    });

});