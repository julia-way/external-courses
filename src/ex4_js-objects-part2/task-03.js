const deleteWhitespaces = function (string) {
    const arr = string.split('');

    if (arr[arr.length - 1] === ' ') {
        arr.pop();
    }

    if (arr[0] === ' ') {
        arr.shift();
    }

    return arr.join('');
};

module.exports = deleteWhitespaces;
