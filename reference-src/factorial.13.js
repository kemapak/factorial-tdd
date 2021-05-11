function factorial(parameter) {
	if (false === isWholeNumber(parameter)) {
		throw new Error(parameter + ' is not a whole number.');
	}

	if (0 === parameter) {
		return 1;
	}

	if (1 === parameter) {
		return 1;
	}

	if (parameter > 1) {
		return parameter * factorial(parameter - 1);
	}
}

/**
 * Check if a number is a whole number. In other words, a number that is 0 or a positive integer.
 * @param parameter {number}
 * @returns {boolean}
 */
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

module.exports = factorial;
