const mathEnforcer = require('./04. Math Enforcer');
const { assert } = require('chai');

describe('mathEnforcer', () => {
    describe('add five', () => {
        //check the input functionality
        it('return undefined if argument is string', () => {
            assert.equal(mathEnforcer.addFive('5'), undefined);
        });
        it('return undefined if argument is an array', () => {
            assert.equal(mathEnforcer.addFive([]), undefined);
        });
        it('return undefined if argument is an object', () => {
            assert.equal(mathEnforcer.addFive({}), undefined);
        });
        it('return undefined if argument is null', () => {
            assert.equal(mathEnforcer.addFive(null), undefined);
        });
        it('return undefined if argument is undefined', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });
        // check the input behaviour
        it('should return 10 with passed number', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });
        it('should return 10.5 with passed number', () => {
            assert.equal(mathEnforcer.addFive(5.5), 10.5);
        });
        it('should return 0.5 with passed number', () => {
            assert.equal(mathEnforcer.addFive(-4.5), 0.5);
        });
    });
    describe('subtract 10', () => {
        // check the input functionality
        it('return undefined if argument is string', () => {
            assert.equal(mathEnforcer.subtractTen('5'), undefined);
        });
        it('return undefined if argument is an array', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined);
        });
        it('return undefined if argument is an object', () => {
            assert.equal(mathEnforcer.subtractTen({}), undefined);
        });
        it('return undefined if argument is null', () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined);
        });
        it('return undefined if argument is undefined', () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });
        // check input behaviour
        it('should return 40 with passed number', () => {
            assert.equal(mathEnforcer.subtractTen(50), 40);
        });
        it('should return -4.5 with passed number', () => {
            assert.equal(mathEnforcer.subtractTen(5.5), -4.5);
        });
        it('should return -20 with passed number', () => {
            assert.equal(mathEnforcer.subtractTen(-10), -20);
        });
    });
    describe('sum', () => {
        // check the input functionality
        it('return undefined if first parameter is string', () => {
            assert.equal(mathEnforcer.sum('5', 2), undefined);
        });
        it('return undefined if first parameter is an array', () => {
            assert.equal(mathEnforcer.sum([], 2), undefined);
        });
        it('return undefined if first parameter is an object', () => {
            assert.equal(mathEnforcer.sum({}, 2), undefined);
        });
        it('return undefined if first parameter is null', () => {
            2,
            assert.equal(mathEnforcer.sum(null, 2), undefined);
        });
        it('return undefined if first parameter is undefined', () => {
            assert.equal(mathEnforcer.sum(undefined, 2), undefined);
        });
        it('return undefined if second parameter is string', () => {
            assert.equal(mathEnforcer.sum(2, '5'), undefined);
        });
        it('return undefined if second parameter is an array', () => {
            assert.equal(mathEnforcer.sum(2, []), undefined);
        });
        it('return undefined if second parameter is an object', () => {
            assert.equal(mathEnforcer.sum(2, {}), undefined);
        });
        it('return undefined if second parameter is null', () => {
            assert.equal(mathEnforcer.sum(2, null), undefined);
        });
        it('return undefined if second parameter is undefined', () => {
            assert.equal(mathEnforcer.sum(2, undefined), undefined);
        });
        //check the input behaviour
        it('should return 40 with two positive integers', () => {
            assert.equal(mathEnforcer.sum(20,20), 40);
        });
        it('should return 10.2 with positive decimals', () => {
            assert.equal(mathEnforcer.sum(5.5,4.7), 10.2);
        });
        it('two negative integers', () => {
            assert.equal(mathEnforcer.sum(-10,-9), -19);
        });
    });
});