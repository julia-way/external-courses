const analogueOfEvery = function (array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === false) {
            return false;
        }
    }

    return true;
};

module.exports = analogueOfEvery;
