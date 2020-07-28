function factorial(pNumber) {

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