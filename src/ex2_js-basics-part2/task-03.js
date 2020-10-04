const getAmmountOfNumbers = function (array) {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    let sumOfZero = 0;

    if (typeof array[i] === 'number') {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === 0) {
                sumOfZero++;
            } else if (array[i] % 2 === 0) {
                sumOfEven++;
            } else {
                sumOfOdd++;
            }
        }
    }

    return [sumOfEven, sumOfOdd, sumOfZero];
};

module.exports = getAmmountOfNumbers;
