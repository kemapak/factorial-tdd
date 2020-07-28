function factorial(pNumber) {

    if (pNumber < 0) {
        throw new Error(pNumber + ' is a negative number.');
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

module.exports = factorial;