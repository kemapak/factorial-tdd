const factorial = require('../reference-src/factorial.03.js');

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
});
