const isSymmetric = require('./05-check-for-symethry');
const expect = require('chai').expect;

describe('Check array for symemtry', () => {
    it('should return false as string input', () => {
        expect(isSymmetric('a')).to.be.equal(false);
    });
});
