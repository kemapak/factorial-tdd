class MathUtil {

	static messages = {
		NOT_A_WHOLE_NUMBER: ' is not a whole number.'
	};

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
			throw new Error(parameter + MathUtil.messages.NOT_A_WHOLE_NUMBER);
		}

		if (0 === parameter) {
			return 1;
		}

		if (1 === parameter) {
			return 1;
		}

		// parameter > 1
		return parameter * MathUtil.factorial(parameter - 1);
	}
}

module.exports = MathUtil;
