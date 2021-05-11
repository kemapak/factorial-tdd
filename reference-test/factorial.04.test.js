const factorial = require('../src-reference/factorial.04.js');

describe('Given a factorial number.', () => {
	test('0! should be 1', () => {
		expect(factorial(0)).toBe(1);
	});

	test('1! should be 1', () => {
		expect(factorial(1)).toBe(1);
	});

	test('5! should be 120', () => {
		expect(factorial(5)).toBe(120);
	});

	test('Negative parameter should throw an exception.', () => {
		function wrapper() {
			factorial(-5);
		}

		expect(wrapper).toThrow('-5 is a negative number.');
	});
});
