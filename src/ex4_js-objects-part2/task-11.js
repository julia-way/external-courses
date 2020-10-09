const countTheSameElements = function (string) {
    let result = {};
    let result1 = {};
    let chars = string.split('');
    let count;

    for (let i = 0; i < chars.length; i++) {
        result[chars[i]] = 0;
    }
    for (el in result) {
            count = 1;
            result1 = {};

            for (let j = 0; j < chars.length; j++) {
                if (el === chars[j]) {
                    result1[el] = count++;
                }
            }
        console.log(result1);
    }
};

module.exports = countTheSameElements;
