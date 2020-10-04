const getArrayView = function (array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
    console.log('Всего ' + array.length + ' элементов в массиве.');

    return;
};

module.exports = getArrayView;
