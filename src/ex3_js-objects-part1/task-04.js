const checkString = function (string, obj) {
    const modifiedObj = obj;

    for (const key in obj) {
        if (key === string) {
            return obj;
        }
    }
    
    modifiedObj[string] = 'new';
    
    return modifiedObj;
};

module.exports = checkString;
