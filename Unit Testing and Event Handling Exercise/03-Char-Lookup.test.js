const lookupChar = require('./03-Char-Lookup');
const { assert } = require('chai');

describe('lookupChar funtion tests', () => {
    // Validate parameters functionality
    it('return char at the specified index', () => {
        assert.equal(lookupChar('Love',0),"L");
    });
    it('return char at the specified index', () => {
        assert.equal(lookupChar('Love',1),"o");
    });
    it('return undefined if the first parameter is a number', () => {
        assert.equal(lookupChar(2, 3), undefined);
    });
    it('return undefined if the first parameter is an array', () => {
        assert.equal(lookupChar([], 3), undefined);
    });
    it('return undefined if the first parameter is an object', () => {
        assert.equal(lookupChar({}, 3), undefined);
    });
    it('return undefined if the second parameter is string', () => {
        assert.equal(lookupChar('ilko', '3'), undefined);
    });
    it('return undefined if the second parameter is decimal', () => {
        assert.equal(lookupChar('ilko', 3.5), undefined);
    });
    it('return undefined if the second parameter is undefined', () => {
        assert.equal(lookupChar('ilko', undefined), undefined);
    });
    //validating the bounds of the string's index
    it('return Incorrect index if index is higher than the string length', () => {
        assert.equal(lookupChar('ilko', 6), 'Incorrect index');
    });
    it('return Incorrect index if index is lower than 0', () => {
        assert.equal(lookupChar('ilko', -6), 'Incorrect index');
    });

});
