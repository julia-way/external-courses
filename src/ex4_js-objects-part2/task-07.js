const getModificationOfString = function (string, number) {
    const newString = string.substring(0, number - 1);
    const newStringWithPoints = newString + '…';

    return newStringWithPoints;
};

module.exports = getModificationOfString;
