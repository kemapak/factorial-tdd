function factorial(pNumber) {

    if ('number' !== typeof pNumber) {
        throw new Error(pNumber + ' is not a number.');
    }

    if (pNumber < 0) {
        throw new Error(pNumber + ' is a negative number.');
    }

    if (pNumber !== Math.trunc(pNumber)) {
        throw new Error(pNumber + ' is a decimal number.');
    }

    if (pNumber > 1) {
        return pNumber * factorial(pNumber - 1);
    } else {
        return 1;
    }
}

module.exports = factorial;