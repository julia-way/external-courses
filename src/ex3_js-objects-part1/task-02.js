const returnData = function (obj) {
    if (typeof obj !== 'object') {
        return ('В качестве аргумента функции должен выступать объект');
    }
    console.log(Object.entries(obj));

    return obj;
};

module.exports = returnData;
