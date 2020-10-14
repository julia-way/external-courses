const gettheOtherOrderOfWords = function (string1, string2, position) {
    const arr = string1.split(' ');
    const firstPartOfString = arr.slice(0, position + 1).join(' ');
    const secondPartOfString = arr.slice(position + 1).join(' ');
    const finalString = firstPartOfString + ' ' + string2 + ' ' + secondPartOfString;

    return finalString;
};

module.exports = gettheOtherOrderOfWords;
