const findPropertyInPrototype = function (keyofObj, obj) {
    let keyOfPrototype;

    for (const key in obj) {
        if (key === keyofObj) {
            keyOfPrototype = Object.getPrototypeOf(obj)[key];
        }
    }  

    return keyOfPrototype;
};

module.exports = findPropertyInPrototype;
