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

## Lets' implement factorial with TDD! 

I will be **very verbose**, and try to mimic actual development iterations and steps. The code will not be optimized until we are done. Then we will do the refactoring, which I will also show.

Let's start!

Do not think about the code! Think about the use cases and tests 

**Do not think about the code! You still are! :)**

Think about one and only one example, one simple use case, a simple happy path. Think it's result, what should it be. Write the test for it than the code.

---

- __Given x = 0, then the factorial should be 1__
	
	1. Write the test, run the test. Test fails... See `/test/factorial.01.test.js` We should not even create the file for the actual code at this stage.

		```javascript
		test('0! should be 1', () => {
			expect(factorial(0)).toBe(1);
		});
		```

	1. Now we write the code, run the test (fix the code until the test passes) See `/src/factorial.01.js`

		```javascript
		if (0 === parameter) {
			return 1;
		}
		```

---

- Repeat for __Given x = 1, then the factorial should be 1__

	1. Write the test, run the test. Test fails... See `/test/factorial.02.test.js`

		```javascript
		test('1! should be 1', () => {
			expect(factorial(1)).toBe(1);
		});
		```
		
	1. Write the code, run the test (fix the code until the test passes)
See `/src/factorial.02.js`

		```javascript
		if (1 === parameter) {
			return 1;
		}
		```

---

- Repeat for __Given x = 5, then the factorial should be 120 (5 * 4 * 3 * 2 *  1)__

	1. Write the test, run the test. Test fails... See `/test/factorial.03.test.js`

		```javascript
		test('5! should be 120', () => {
			expect(factorial(5)).toBe(120);
		});
		```
    
	1. Write the code, run the test (fix the code until the test passes)
See `/src/factorial.03.js`

		```javascript
		if (parameter > 1) {
			return parameter * factorial(parameter - 1);
		}
		```

## How about the exceptions, negative use cases?

- Repeat for __Given x = -1, should throw an exception. (negative number)__

	1. Write the test, run the test. Test fails... See `/test/factorial.04.test.js` _Please note: when checking if the method throws an exception, it has to be wrapped into a function, since JEST cannot accept methods with parameters, that throws an exception. (We will refactor this in the future steps as well.)_

		```javascript
		test('Negative parameter should throw an exception.', () => {
			function wrapper() {
				factorial(-5);
			}
			expect(wrapper).toThrow('-5 is a negative number.');
		});		
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/factorial.04.js`

		```javascript
		if (parameter < 0) {
			throw new Error(parameter + ' is a negative number.');
		}
		```

---

- Repeat for __Given x = 2.3, should throw an exception. (floating number)__
	1. Write the test, run the test. Test fails... See `/test/factorial.05.test.js`

		```javascript
		test('Decimal parameter should throw an exception.', () => {
			function wrapper() {
				factorial(2.3);
			}
			expect(wrapper).toThrow('2.3 is a decimal number.');
		});
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/factorial.05.js`

		```javascript
		if (parameter !== Math.trunc(parameter)) {
			throw new Error(parameter + ' is a decimal number.');
		}
		```

---

- Repeat for __Given x = “x”, should throw an exception. (string)__
	1. Write the test, run the test. Test fails... See `/test/factorial.06.test.js`

		```javascript
		test('String parameter should throw an exception.', () => {
			function wrapper() {
				factorial('x');
			}
			expect(wrapper).toThrow('x is not a number.');
		});
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/factorial.06.js`

		```javascript
		if ('string' === typeof parameter) {
			throw new Error(parameter + ' is not a number.');
		}
		```

---

- Repeat for __Given x = true, should throw an exception (boolean)__
	1. Write the test, run the test. Test fails... See `/test/factorial.07.test.js`

		```javascript
		test('Boolean parameter should throw an exception.', () => {
			function wrapper() {
				factorial(true);
			}
			expect(wrapper).toThrow('true is not a number.');
		});
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/factorial.07.js`

		```javascript
		if ('boolean' === typeof parameter) {
			throw new Error(parameter + ' is not a number.');
		}
		```

---

- Repeat for __Given x = undefined, should throw an exception (undefined)__
	1. Write the test, run the test. Test fails... See `/test/factorial.08.test.js`

		```javascript
		test('Undefined parameter should throw an exception.', () => {
			function wrapper() {
				let x;
				factorial(x);
			}
			expect(wrapper).toThrow('undefined is not a number.');
		});
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/factorial.08.js`

		```javascript
		if (undefined === parameter) {
			throw new Error(parameter + ' is not a number.');
		}
		```

---

- Repeat for __Given x = null, should throw an exception (null)__
	1. Write the test, run the test. Test fails... See `/test/factorial.09.test.js`

		```javascript
		test('Null parameter should throw an exception.', () => {
			function wrapper() {
				let x = null;
				factorial(x);
			}
			expect(wrapper).toThrow('null is not a number.');
		});
		```
		
	1. Write the code, run the test (fix the code until the test passes)
See `/src/factorial.09.js`

		```javascript
		if (null === parameter) {
			throw new Error(parameter + ' is not a number.');
		}
		```

---

- Repeat for __Given x = {chapter: 1}, should throw an exception (object)__
	1. Write the test, run the test. Test fails... See `/test/factorial.10.test.js`

		```javascript
		test('Object parameter should throw an exception.', () => {
				function wrapper() {
					let x = {chapter: 1};
					factorial(x);
				}
				expect(wrapper).toThrow('[object Object] is not a number.');
		});
		```

	1. Write the code, run the test (fix the code until the test passes)
See `/src/factorial.10.js`

		```javascript
		if ('object' === typeof parameter) {
			throw new Error(parameter + ' is not a number.');
		}
		```

---

- Repeat for __Given x is not passed , should throw an exception (no parameter passed)__
	1. Write the test, run the test. Tests do pass. See `/test/factorial.11.test.js`. It turns out that not passing a parameter and passing an uninitialized variable as parameter throw the same exception. They are both `undefined`. 

		| No Parameter  | Undefined Variable     |
		|:--            |:--                     |
		| `factorial();`| `let x; factorial(x);` |

		```javascript
		test('No parameter should throw an exception.', () => {
			function wrapper() {
				factorial();
			}
			expect(wrapper).toThrow('undefined is not a number.');
		});
		```

	1. We do not need to write any additional code, but we do need to start thinking about making our code better, reorganizing, refactoring. See `/src/factorial.11.js` (No change compare to `factorial.10.js`.)

---

We might add some more tests but the ones we have so far covered almost all the use cases the happy path and the unhappy path.

## Refactor and optimize your code.
At this point we can have the confidence to easily change our code since have our unit tests. We can makes mistakes, and our test will catch it. If we miss anything we can, and we should add a test for it.

---

- Instead of checking if parameter is type like a "string", "boolean", "object", "undefined' or "null" we can check if it is a number. Can we replace all below code?

	```javascript
	if ('object' === typeof parameter) {
		throw new Error(parameter + ' is not a number.');
	}
	
	if (null === parameter) {
		throw new Error(parameter + ' is not a number.');
	}
	
	if (undefined === parameter) {
		throw new Error(parameter + ' is not a number.');
	}
	
	if ('boolean' === typeof parameter) {
		throw new Error(parameter + ' is not a number.');
	}
	
	if ('string' === typeof parameter) {
		throw new Error(parameter + ' is not a number.');
	}
	```

	With just one conditional, one if statement?

	```javascript
	if ('number' !== typeof parameter) {
		throw new Error(parameter + ' is not a number.');
	}
	```

	We change our code, and run our tests. Everything works! Great, we reduced lines in our code. The less code the better. Please see. `/test/factorial.12.test.js` and `/src/factorial.12.js`

---

- “FUNCTIONS SHOULD DO ONE THING. THEY SHOULD DO IT WELL. THEY SHOULD DO IT ONLY.” <sup>1</sup>. We will use the _extract method_ refactoring pattern <sup>2</sup> in this enhancement. In our code we are checking if our parameter is a valid whole number. That code should go to its own method and we should call it from the factorial. We are creating a dependency here but we will manage that as well in this example.

	We should extract the following logic into its own method.	 We can update our code to check if the parameter is a whole number return true else return false. 
	
	```javascript
	if ('number' !== typeof parameter) {
		throw new Error(parameter + ' is not a number.');
	}
	
	if (parameter < 0) {
		throw new Error(parameter + ' is a negative number.');
	}
	
	if (parameter !== Math.trunc(parameter)) {
		throw new Error(parameter + ' is a decimal number.');
	}
	```

	into 

	```javascript
	function isWholeNumber(parameter) {
	
		if ('number' !== typeof parameter) {
			return false;
		}
		
		if (parameter < 0) {
			return false;
		}
		
		if (parameter !== Math.trunc(parameter)) {
			return false;
		}
		
		return true;
	}
	```
	
	Now our factorial code is down to quite a few lines, great! But when we run our test they fail. We need to update the exception text in our tests to **"is not a whole number"**. Now all our test do pass. Please see `/test/factorial.12.test.js` and `/src/factorial.12.js`.
	
---

- From the last example we still have several problems. First changing the exception, error text in multiple places. We need do something about this. Second, isWholeNumber is a private internal function. It is not possible to test it explicitly we need to make it a part of a utility class. We need to create a math utility class and make both factorial and isWholeNumber methods of it.

	1. First let refactor our implementation and test file names to MathUtil, do not change the actual code except the reference to the file import. Please see `/test/MathUtil.01.test.js` and `/src/MathUtil.01.js`. Run our test all pass.

	1. Let us create MathUtil class and make factorial and isWholeNumber it's methods. Run tests, they fail, update reference to function `factorial` to `MathUtil.factorial` method. Run tests, they pass. Please see `/test/MathUtil.02.test.js` and `/src/MathUtil.02.js`.

		```javascript
		class MathUtil {
		
			/**
			* Check if a number is a whole number. In other words, a number that is 0 or a positive integer.
			* @param parameter {number}
			* @returns {boolean}
			*/
			static isWholeNumber(parameter) {
			
				if ('number' !== typeof parameter) {
					return false;
				}
				
				if (parameter < 0) {
					return false;
				}
				
				if (parameter !== Math.trunc(parameter)) {
					return false;
				}
				
				return true;
			}
			
			/**
			* Calculates of a given whole number.
			* @param parameter {number} Whole number.
			* @returns {number}
			* @throws {Error} Not a whole number.
			*/
			static factorial(parameter) {
			
				if (false === MathUtil.isWholeNumber(parameter)) {
					throw new Error(parameter + ' is not a whole number.');
				}
				
				if (0 === parameter) {
					return 1;
				}
				
				if (1 === parameter) {
					return 1;
				}
				
				if (parameter > 1) {
					return parameter * MathUtil.factorial(parameter - 1);
				}
			}
		}
		```

	1. Let us externalize the hard coded exception text. This refactoring pattern is called _Replace Magic Literal_ <sup>3</sup>. We add the static messages to the MathUtil class and update all the references both in MathUtil and MathUtil test. Please see `/test/MathUtil.03.test.js` and `/src/MathUtil.03.js`.

		```javascript
		static messages = {
			NOT_A_WHOLE_NUMBER: ' is not a whole number.'
		}
		```

		The references will look like below. Keep in mind MathUtil is a static class.
		
		```javascript
		expect(wrapper).toThrow('-5' + MathUtil.messages.NOT_A_WHOLE_NUMBER);
		```

---

- We also should convert our wrapper functions to arrow functions. The code will look way more cleaner and smaller. We will not change the implementation code, only the tests. Please see `/test/MathUtil.04.test.js` and `/src/MathUtil.04.js`.

	```javascript
	expect( () => MathUtil.factorial(-5)).toThrow('-5' + MathUtil.messages.NOT_A_WHOLE_NUMBER);
	```

	Also the last conditional in our MathUtil.factorial is not necessary since we cover hopefully all the cases. A well written method by default always must return a value if there is no exception thrown.
	
	```javascript
	// parameter > 1
	return parameter * MathUtil.factorial(parameter - 1);
	```		
			
---

- Lastly we need to split the tests for MathUtil.isWholeNumber and MathUtil.factorial into separate test suites. Please keep in mind redundancy in testing is a good thing, so all the tests that apply to whole numbers will be copied into whole number suite. Please see `/test/MathUtil.test.js` and `/src/MathUtil.js` for final versions.

## Final thoughts 
Unit tests are the heart and soul of software development. I would highly recommend [xUnit Test Patterns: Refactoring Test Code, by Gerard Meszaros](https://www.informit.com/store/xunit-test-patterns-refactoring-test-code-9780131495050) if you want learn the testing design patterns. Test code will get messy and just like any code needs affection, time and refactoring. Finally we are all software engineers are indebted to [Kent Beck](https://www.kentbeck.com) for TDD and yes "Good code matters!".  

---

1. [Clean Code: A Handbook of Agile Software Craftsmanship, by Bob "Uncle" Martin](https://www.informit.com/store/clean-code-a-handbook-of-agile-software-craftsmanship-9780132350884) -- Chapter 3, Function 

2. [Refactoring: Improving the Design of Existing Code, 2nd Edition, by Martin Fowler.](https://www.informit.com/store/refactoring-improving-the-design-of-existing-code-9780134757599) -- Extract Functions.
 
3. [Refactoring: Improving the Design of Existing Code, 2nd Edition, by Martin Fowler.](https://www.informit.com/store/refactoring-improving-the-design-of-existing-code-9780134757599) -- Replace Magic Literal.