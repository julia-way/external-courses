const findPropertyInPrototype = function (key, obj) {
    const objPrototype = Object.getPrototypeOf(obj);
    let keyOfPrototype;

    if (objPrototype.hasOwnProperty(key)) {
        keyOfPrototype = objPrototype[key];
    }

    return keyOfPrototype;
};

module.exports = findPropertyInPrototype;
