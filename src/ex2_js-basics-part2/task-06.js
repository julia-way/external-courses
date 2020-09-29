let testArray = [];
let simpleOrComposite = function (x) {
    if (x > 1000) {
        return ("Данные неверны");
    } else if (x === 0 || x === 1) {
        return ("Данное число не является простым/составным");
    };
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            testArray.push(1);
        } else {
            testArray.push(0);
        };
    };
    if (testArray.includes(1)) {
        return ("Число " + x + " - составное число");
    }
    return ("Число " + x + " - простое число");
};
module.exports = simpleOrComposite;
