let ammountOfNumbers = function (array) {
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            array.splice(i--, 1);
        };
    };
    let sumOfEven = 0;
    let sumOfOdd = 0;
    let sumOfZero = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0 && array[i] !== 0) {
            sumOfEven++;
        } else if (array[i] % 2 !== 0) {
            sumOfOdd++;
        } else {
            sumOfZero++;
        };
    };
    return ([sumOfEven, sumOfOdd, sumOfZero]);
};
module.exports = ammountOfNumbers;
