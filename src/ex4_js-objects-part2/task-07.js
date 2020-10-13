const getModificationOfString = function (string, number) {
    let newStringWithPoints;

    if (string.length > number) {
        newStringWithPoints = string.substring(0, number - 1) + '…';
    }

    return newStringWithPoints;
};

module.exports = getModificationOfString;
