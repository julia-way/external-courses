const getTypeElement = function (a) {
    const stringOrNumber = typeof a;

    if (stringOrNumber === 'string') {
        return stringOrNumber;
    }

    if (stringOrNumber === 'number' && isNaN(a) === false) {
        return stringOrNumber;
    }

    return undefined;
};

module.exports = getTypeElement;
