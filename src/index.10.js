function factorial(pNumber) {

    if ('object' === typeof pNumber) {
        throw new Error(pNumber + ' is not a number.');
    }

    if (null === pNumber) {
        throw new Error(pNumber + ' is not a number.');
    }

    if (undefined === pNumber) {
        throw new Error(pNumber + ' is not a number.');
    }

    if ('boolean' === typeof pNumber) {
        throw new Error(pNumber + ' is not a number.');
    }

    if ('string' === typeof pNumber) {
        throw new Error(pNumber + ' is not a number.');
    }

    if (pNumber < 0) {
        throw new Error(pNumber + ' is a negative number.');
    }

    if (pNumber !== Math.trunc(pNumber)) {
        throw new Error(pNumber + ' is a decimal number.');
    }

    if (0 === pNumber) {
        return 1;
    }

    if (1 === pNumber) {
        return 1;
    }

    if (pNumber > 1) {
        return pNumber * factorial(pNumber - 1);
    }
}

module.exports = factorial