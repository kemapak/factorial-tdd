const factorial = require('../src/index.01.js');

describe('Given factorial number.', () => {

    test('0! should be 1', () => {
        expect(factorial(0)).toBe(1);
    });
});