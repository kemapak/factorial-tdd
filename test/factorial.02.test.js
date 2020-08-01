const factorial = require('../src/factorial.02.js');

describe('Given a factorial number.', () => {

    test('0! should be 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('1! should be 1', () => {
        expect(factorial(1)).toBe(1);
    });
});