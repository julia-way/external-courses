const findPropertyInPrototype = function (keyofObj, obj) {
    const obj2 = Object.getPrototypeOf(obj);
    let keyOfPrototype;

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key) && key === keyofObj) {
            keyOfPrototype = obj2[key];
        }
    }
    return keyOfPrototype;
};

module.exports = findPropertyInPrototype;
