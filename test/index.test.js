const factorial = require('../src/index.js');

describe('Given factorial number.', () => {

    test('String parameter should throw an exception.', () => {
        function wrapper() {
            factorial('x');
        }

        expect(wrapper).toThrow('x is not a number.');
    });

    test('Negative parameter should throw an exception.', () => {
        function wrapper() {
            factorial(-5);
        }

        expect(wrapper).toThrow('-5 is a negative number.');
    });

    test('Decimal parameter should throw an exception.', () => {
        function wrapper() {
            factorial(2.3);
        }

        expect(wrapper).toThrow('2.3 is a decimal number.');
    });

    test('5! should be 120', () => {
        expect(factorial(5)).toBe(120);
    });

    test('0! should be 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('1! should be 1', () => {
        expect(factorial(1)).toBe(1);
    });
});