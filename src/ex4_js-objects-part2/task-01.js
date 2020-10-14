const findPropertyInPrototype = function (key, obj) {
    const objPrototype = Object.getPrototypeOf(obj);
    let keyPrototype;

    if (objPrototype.hasOwnProperty(key)) {
        keyPrototype = objPrototype[key];
    }

    return keyPrototype;
};

module.exports = findPropertyInPrototype;
