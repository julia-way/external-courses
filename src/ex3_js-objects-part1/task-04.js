const checkString = function (string, obj) {
    modifiedObj = obj;
    
    if (typeof string !== 'string' || typeof obj !== 'object') {
        return ('В качестве аргументов функции введите последовательно строку и объект');
    }

    for (const key in obj) {
        if (key !== string) {
            modifiedObj[string] = 'new';
        }
    }

    return modifiedObj;
};

module.exports = checkString;
