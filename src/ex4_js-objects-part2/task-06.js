const getCapitalLetters = function (string) {
    return string.split(' ').map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
};

module.exports = getCapitalLetters;
