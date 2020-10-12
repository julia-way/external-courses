const getModificationOfString = function (string, number) {
    let newStringWithPoints;

    if (string.length > number) {
        const newString = string.substring(0, number - 1);
        newStringWithPoints = newString + '…';
    }

    return newStringWithPoints;
};

module.exports = getModificationOfString;
