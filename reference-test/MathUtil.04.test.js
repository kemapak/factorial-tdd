const MathUtil = require('../reference-src/MathUtil.04.js');

describe('Given a factorial number.', () => {
	test('0! should be 1', () => {
		expect(MathUtil.factorial(0)).toBe(1);
	});

	test('1! should be 1', () => {
		expect(MathUtil.factorial(1)).toBe(1);
	});

	test('5! should be 120', () => {
		expect(MathUtil.factorial(5)).toBe(120);
	});

	test('Negative parameter should throw an exception.', () => {
		expect(() => MathUtil.factorial(-5)).toThrow('-5' + MathUtil.messages.NOT_A_WHOLE_NUMBER);
	});

	test('Decimal parameter should throw an exception.', () => {
		expect(() => MathUtil.factorial(2.3)).toThrow('2.3' + MathUtil.messages.NOT_A_WHOLE_NUMBER);
	});

	test('String parameter should throw an exception.', () => {
		expect(() => MathUtil.factorial('x')).toThrow('x' + MathUtil.messages.NOT_A_WHOLE_NUMBER);
	});

	test('Boolean parameter should throw an exception.', () => {
		expect(() => MathUtil.factorial(true)).toThrow('true' + MathUtil.messages.NOT_A_WHOLE_NUMBER);
	});

	test('Undefined parameter should throw an exception.', () => {
		expect(() => {
			let x;
			MathUtil.factorial(x);
		}).toThrow('undefined' + MathUtil.messages.NOT_A_WHOLE_NUMBER);
	});

	test('Null parameter should throw an exception.', () => {
		expect(() => {
			let x = null;
			MathUtil.factorial(x);
		}).toThrow('null' + MathUtil.messages.NOT_A_WHOLE_NUMBER);
	});

	test('Object parameter should throw an exception.', () => {
		expect(() => {
			let x = {chapter: 1};
			MathUtil.factorial(x);
		}).toThrow('[object Object]' + MathUtil.messages.NOT_A_WHOLE_NUMBER);
	});

	test('No parameter should throw an exception.', () => {
		expect(() => MathUtil.factorial()).toThrow('undefined' + MathUtil.messages.NOT_A_WHOLE_NUMBER);
	});
});
