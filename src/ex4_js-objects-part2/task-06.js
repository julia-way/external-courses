const getCapitalLetters = function (string) {
    const newString = string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');

    return newString;
};

module.exports = getCapitalLetters;
