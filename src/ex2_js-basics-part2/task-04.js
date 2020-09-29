let theSame = function (array) {
    let testArray = [];
    for (let i = 0; i < (array.length - 1); i++) {
        if (array[i] !== array[i + 1]) {
            testArray.push(0);
        } else {
            testArray.push(1);
        };
    };
    if (testArray.includes(0)) {
        return false;
    }
    return true;
};
module.exports = theSame;
