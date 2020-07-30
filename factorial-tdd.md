# Factorial TDD, with JavaScript and Jest

## The Problem
We want to write some code that will calculate a factorial given a number as an input.

## What is a factorial?
Multiplying all whole numbers from our given number down to 1. Factorials are indicated by a "**!**" sign and they are whole numbers.

> Whole Numbers are positive integers and 0. For example; 0, 1, 2, 3, and so on.

You can calculate the factorial of a number by the following formula.
`x! = x * (x-1)!`

Which is equal to `x! = x * (x-1) * (x-2) * … * 3 * 2 * 1`

Also `1! = 1` and `0! = 1` keep this in mind.

**For example:** `4! = 4 * 3 * 2 * 1` which is `24` in other words `4! = 4 * (4 - 1) * (4 - 2) * (4 - 3)`

## Lets' implement factorial in TDD! 

I will be **very verbose**, and try to mimic actual development iterations and steps. The code will not be optimized until we are done. Then we will do the refactoring, which I will also show.

Let's start!

Do not think about the code! Think about the use cases and tests 

**Do not think about the code! You still are! :)**

Think about one and only one example, one simple use case, a simple happy path. Think it's result, what should it be. Write the test for it than the code.

- __Given x = 0, then the factorial should be 1__
	
	1. Write the test, run the test. Test fails... See `/test/index.01.test.js` We should not even create the file for the actual file at this stage.

		```javascript
		test('0! should be 1', () => {
			expect(factorial(0)).toBe(1);
		});
		```

	1. Now we write the code, run the test (fix the code until the test passes) See `/src/index.01.js`

		```javascript
		if (0 === pNumber) {
			return 1;
		}
		```
---
- Repeat for __Given x = 1, then the factorial should be 1__

	1. Write the test, run the test. Test fails... See `/test/index.02.test.js`

		```javascript
		test('1! should be 1', () => {
			expect(factorial(1)).toBe(1);
		});
		```
		
	1. Write the code, run the test (fix the code until the test passes)
See `/src/index.02.js`

		```javascript
		if (1 === pNumber) {
			return 1;
		}
		```
---
- Repeat for __Given x = 5, then the factorial should be 120 (5 * 4 * 3 * 2 *  1)__

	1. Write the test, run the test. Test fails... See `/test/index.03.test.js`

		```javascript
		test('5! should be 120', () => {
			expect(factorial(5)).toBe(120);
		});
		```
    
	1. Write the code, run the test (fix the code until the test passes)
See `/src/index.03.js`

		```javascript
		if (pNumber > 1) {
			return pNumber * factorial(pNumber - 1);
		}
		```

## How about the exceptions, negative use cases?

- Repeat for __Given x = -1, should throw an exception. (negative number)__

	1. Write the test, run the test. Test fails... See `/test/index.04.test.js` _Please note: when checking if the method throws an exception, it has to be wrapped into a function, since JEST cannot accept methods with parameters, that throws an exception. (We will refactor this in the future steps as well.)_

		```javascript
		test('Negative parameter should throw an exception.', () => {
			function wrapper() {
				factorial(-5);
			}
			expect(wrapper).toThrow('-5 is a negative number.');
		});		
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/index.04.js`

		```javascript
		if (pNumber < 0) {
			throw new Error(pNumber + ' is a negative number.');
		}
		```
---
- Repeat for __Given x = 2.3, should throw an exception. (floating number)__
	1. Write the test, run the test. Test fails... See `/test/index.05.test.js`

		```javascript
		test('Decimal parameter should throw an exception.', () => {
			function wrapper() {
				factorial(2.3);
			}
			expect(wrapper).toThrow('2.3 is a decimal number.');
		});
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/index.05.js`

		```javascript
		if (pNumber !== Math.trunc(pNumber)) {
			throw new Error(pNumber + ' is a decimal number.');
		}
		```
---
- Repeat for __Given x = “x”, should throw an exception. (string)__
	1. Write the test, run the test. Test fails... See `/test/index.06.test.js`

		```javascript
		test('String parameter should throw an exception.', () => {
			function wrapper() {
				factorial('x');
			}
			expect(wrapper).toThrow('x is not a number.');
		});
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/index.06.js`

		```javascript
		if ('string' === typeof pNumber) {
			throw new Error(pNumber + ' is not a number.');
		}
		```
---
- Repeat for __Given x = true, should throw an exception (boolean)__
	1. Write the test, run the test. Test fails... See `/test/index.07.test.js`

		```javascript
		test('Boolean parameter should throw an exception.', () => {
			function wrapper() {
				factorial(true);
			}
			expect(wrapper).toThrow('true is not a number.');
		});
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/index.07.js`

		```javascript
		if ('boolean' === typeof pNumber) {
			throw new Error(pNumber + ' is not a number.');
		}
		```
---
- Repeat for __Given x = undefined, should throw an exception (undefined)__
	1. Write the test, run the test. Test fails... See `/test/index.08.test.js`

		```javascript
		test('Undefined parameter should throw an exception.', () => {
			function wrapper() {
				factorial();
			}
			expect(wrapper).toThrow('undefined is not a number.');
		});
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/index.08.js`

		```javascript
		if ('undefined' === typeof pNumber) {
			throw new Error(pNumber + ' is not a number.');
		}
		```
---
- Repeat for __Given x = null, should throw an exception (null)__
	1. Write the test, run the test. Test fails... See `/test/index.09.test.js`

	1. Write the code, run the test (fix the code until the test passes)
See `/src/index.09.js`

1. Repeat for __Given x = {chapter: 1}, should throw an exception (object)__
	1. Write the test, run the test. Test fails... See `/test/index.10.test.js`

	1. Write the code, run the test (fix the code until the test passes)
See `/src/index.10.js`

1. Repeat for __Given x is not passed , should throw an exception (no parameter passed)__
	1. Write the test, run the test. Test fails... See `/test/index.11.test.js`

	1. Write the code, run the test (fix the code until the test passes)
See `/src/index.11.js`

We might add some more tests but the ones we have so far cover almost all the use cases good and bad.

## Refactor and optimize your code.

We can update your code to check if the parameter is a whole number else throw the exception. 
Delete conditionals for string, boolean, object, etc.
We still make sure it is a whole number (we need to check to make sure it is not negative or a floating number)
