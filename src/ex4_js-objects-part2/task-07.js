const getModificationOfString = function (string, number) {
    if (string.length >= number) {
        return string.substring(0, number - 1) + '…';
    }

    return string;
};

module.exports = getModificationOfString;
