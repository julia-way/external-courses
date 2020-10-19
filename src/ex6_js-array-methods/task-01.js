const analogueOfSlice = function (array, begin, end) {
    const newArray = [];

    if (begin >= 0 && (end >= 0 || end === undefined)) {
        for (let i = 0; i < array.length; i++) {
            if (i >= begin && (i < end || end === undefined)) {
                newArray.push(array[i]);
            }
        }
    }

    if (begin === undefined && end === undefined) {
        for (let i = 0; i < array.length; i++) {
            newArray.push(array[i]);
        }
    }

    if (begin < 0 && end === undefined) {
        for (let i = -1; i >= begin; i--) {
            newArray.push(array[array.length + i]);
        }
        newArray.reverse();
    }

    if (begin < 0 && end < 0) {
        for (let i = -1; i >= begin; i--) {
            newArray.push(array[array.length + i]);
        }
        newArray.reverse();

        for (let j = -1; j >= end; j--) {
            newArray.pop();
        }
    }

    if (begin >= 0 && end < 0) {
        if (i >= begin) {
            for (let i = 0; i < array.length; i++) {
                newArray.push(array[i]);
            }
        }
        for (let j = -1; j >= end; j--) {
            newArray.pop();
        }
    }

    if (begin < 0 && end >= 0) {
        for (let i = -1; i >= begin; i--) {
            newArray.push(array[array.length + i]);
        }
        newArray.reverse();

        for (let i = 0; i < array.length; i++) {
            if (i < end) {
                newArray.pop(array[array.length - i]);
            }
        }
    }

    return newArray;
};

module.exports = analogueOfSlice;
