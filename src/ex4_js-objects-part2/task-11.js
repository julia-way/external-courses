const countTheSameElements = function (string) {
    const arr = string.split('');
    const result = {};

    for (i in arr) {
        if (result[arr[i]] !== undefined) {
            (result[arr[i]]++);
        } else {
            (result[arr[i]] = 1);
        }
    }

    for (const key in result) {
        console.log(key, ':', result[key]);
    }
};

module.exports = countTheSameElements;
