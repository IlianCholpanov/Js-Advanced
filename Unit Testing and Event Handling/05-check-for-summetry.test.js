const isSymmetric = require('./05-check-for-summetry');
const { expect } = require('chai');

describe('checkForSymmetry function tests', () => {

    it('Should return false with string as input', () => {
        expect(isSymmetric('a')).to.be.equal(false);
    });

    it('Should return false with a number as input', () => {
        expect(isSymmetric(5)).to.be.equal(false);
    });

    it('Should return false with an object as input', () => {
        expect(isSymmetric({})).to.be.equal(false);
    });

    it('Should return false with different types in the array', () => {
        expect(isSymmetric([1, 2, 2, '1'])).to.be.equal(false);
    });

    it('Should return true if the array is symetrical', () => {
        expect(isSymmetric([1,2,2,1])).to.be.expect(true);
    });

});
