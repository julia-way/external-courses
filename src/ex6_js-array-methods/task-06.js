const analogueOfReduce = function (array, callback, initialValue) {
    let previousValue;
    let x;

    if (initialValue === undefined) {
        previousValue = array[0];
        x = 1;
    } else {
        previousValue = initialValue;
        x = 0;
    }

    for (let i = x; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
    }

    return previousValue;
};

module.exports = analogueOfReduce;
