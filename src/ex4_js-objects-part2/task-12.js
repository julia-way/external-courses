const getSum = function (number1, number2) {
    const sumValue = +(number1 + number2).toFixed(3);

    return sumValue;
};

module.exports = getSum;
