const getAmmountOfNumbers = function (array) {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    let sumOfZero = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] === 0) {
            sumOfZero++;
        } else if (typeof array[i] === 'number' && array[i] % 2 === 0) {
            sumOfEven++;
        } else if (typeof array[i] === 'number') {
            sumOfOdd++;
        }
    }

    return [sumOfEven, sumOfOdd, sumOfZero];
};

module.exports = getAmmountOfNumbers;
