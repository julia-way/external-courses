let a;
let getTypeElement = function (a) {
    if (typeof a === 'string') {
        return typeof a;
    } if (typeof a === 'number' && isNaN(a) === false) {
        return typeof a;
    }
    return undefined;
};
module.exports = getTypeElement;
