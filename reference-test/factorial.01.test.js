const factorial = require('../reference-src/factorial.01.js');

describe('Given a factorial number.', () => {
	test('0! should be 1', () => {
		expect(factorial(0)).toBe(1);
	});
});
