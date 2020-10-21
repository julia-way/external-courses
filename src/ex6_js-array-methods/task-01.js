const analogueOfSlice = function (array, begin, end) {
    const newArray = [];
    let newBegin = begin;
    let newEnd = end;

    if (begin === undefined) {
        newBegin = 0;
    }

    if (end === undefined || end > array.length) {
        newEnd = array.length;
    }

    if (begin < 0 || begin < (-(array.length))) {
        newBegin = array.length + begin;
    }

    if (end < 0) {
        newEnd = array.length + end;
    }

    for (let i = newBegin; i < newEnd; i++) {
        newArray.push(array[i]);
    }

    return newArray;
};

module.exports = analogueOfSlice;
