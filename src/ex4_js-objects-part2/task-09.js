const gettheOtherOrderOfWords = function (string1, string2, position) {
    const arr = string1.split(' ');
    const modificatedString = arr.splice(position + 1, 0, string2);
    const toMakeString = arr.join(' ');

    return toMakeString;
};

module.exports = gettheOtherOrderOfWords;
