const analogueOfReduce = function (array, callback, initialValue) {
    let previousValue;

    if (initialValue === undefined) {
        previousValue = array[0];

        for (let i = 1; i < array.length; i++) {
            previousValue = callback(previousValue, array[i], i, array);
        }
    }

    if (initialValue !== undefined) {
        previousValue = initialValue;

        for (let i = 0; i < array.length; i++) {
            previousValue = callback(previousValue, array[i], i, array);
        }

    }

    return previousValue;
};

module.exports = analogueOfReduce;
