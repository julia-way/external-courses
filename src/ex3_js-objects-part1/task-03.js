const checkStringInObject = function (string, obj) {
    for (const key in obj) {
        if (key === string) {
            return true;
        }
    }

    return false;
};

module.exports = checkStringInObject;
