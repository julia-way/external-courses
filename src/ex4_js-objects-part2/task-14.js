const randomNumberFromMinToMax = function (min, max) {
    const randomNumber = min + Math.random() * (max + 1 - min);

    return Math.floor(randomNumber);
};

module.exports = randomNumberFromMinToMax;
