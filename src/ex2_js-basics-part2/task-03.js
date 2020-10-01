const ammountOfNumbers = function (array) {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    let sumOfZero = 0;

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i]) === true) {
            return ('Массив не должен содержать нечисловых значений');
        };
    };

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && array[i] % 2 === 0 && array[i] !== 0) {
            sumOfEven++;
        } else if (typeof array[i] === 'number' && array[i] % 2 !== 0) {
            sumOfOdd++;
        } else if (typeof array[i] === 'number') {
            sumOfZero++;
        };
    };

    return [sumOfEven, sumOfOdd, sumOfZero];
};
module.exports = ammountOfNumbers;
