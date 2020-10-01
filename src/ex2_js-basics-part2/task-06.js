const simpleOrComposite = function (x) {
    if (x > 1000) {
        return ("Данные неверны");
    };

    if (x === 0 || x === 1) {
        return ("Данное число не является простым/составным");
    };

    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            return ("Число " + x + " - составное число");
        };
    };

    return ("Число " + x + " - простое число");
};
module.exports = simpleOrComposite;
