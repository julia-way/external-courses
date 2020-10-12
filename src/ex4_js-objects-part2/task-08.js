const getLowerCamelCase = function (string) {
    const newString = string.split(' ').map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join('');
    const newString1 = newString[0].toLowerCase() + newString.substring(1);

    return newString1;
};

module.exports = getLowerCamelCase;
