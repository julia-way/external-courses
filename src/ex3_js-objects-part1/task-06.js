const getDeepCopy = function (obj) {
    const newObj = {};

    if (typeof obj === 'object') {
        if (obj instanceof Array) {
            let newObj = [];

            for (let i = 0; i < obj.length; i++) {
                newObj[i] = getDeepCopy(obj[i]);
            }

            return newObj;
        }

        if (obj.prototype) {
            
            newObj.prototype = obj.prototype;
        }

        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = getDeepCopy(obj[key]);
            }
        }

        return newObj;
    }

    return obj;
};

module.exports = getDeepCopy;
