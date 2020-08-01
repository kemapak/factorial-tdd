function factorial(parameter) {

    if ('boolean' === typeof parameter) {
        throw new Error(parameter + ' is not a number.');
    }

    if ('string' === typeof parameter) {
        throw new Error(parameter + ' is not a number.');
    }

    if (parameter < 0) {
        throw new Error(parameter + ' is a negative number.');
    }

    if (parameter !== Math.trunc(parameter)) {
        throw new Error(parameter + ' is a decimal number.');
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

module.exports = factorial