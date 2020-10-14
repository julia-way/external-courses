const checkStringInString = function (string1, string2) {
    if (string1.includes(string2)) {
        return true;
    }

    return false;
};

module.exports = checkStringInString;
