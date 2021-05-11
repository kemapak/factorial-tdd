const factorial = require('../reference-src/factorial.13.js');

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

		expect(wrapper).toThrow('-5 is not a whole number.');
	});

	test('Decimal parameter should throw an exception.', () => {
		function wrapper() {
			factorial(2.3);
		}

		expect(wrapper).toThrow('2.3 is not a whole number.');
	});

	test('String parameter should throw an exception.', () => {
		function wrapper() {
			factorial('x');
		}

		expect(wrapper).toThrow('x is not a whole number.');
	});

	test('Boolean parameter should throw an exception.', () => {
		function wrapper() {
			factorial(true);
		}

		expect(wrapper).toThrow('true is not a whole number.');
	});

	test('Undefined parameter should throw an exception.', () => {
		function wrapper() {
			let x;
			factorial(x);
		}

		expect(wrapper).toThrow('undefined is not a whole number.');
	});

	test('Null parameter should throw an exception.', () => {
		function wrapper() {
			let x = null;
			factorial(x);
		}

		expect(wrapper).toThrow('null is not a whole number.');
	});

	test('Object parameter should throw an exception.', () => {
		function wrapper() {
			let x = {chapter: 1};
			factorial(x);
		}

		expect(wrapper).toThrow('[object Object] is not a whole number.');
	});

	test('No parameter should throw an exception.', () => {
		function wrapper() {
			factorial();
		}

		expect(wrapper).toThrow('undefined is not a whole number.');
	});
});
