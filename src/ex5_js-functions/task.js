function Calculator() {
    this.result = 0;

    this.add = (number1 = 0) => {
        this.result = this.result + number1;

        return this.add;
    };

    this.subtract = (number1 = 0) => {
        this.result = this.result - number1;

        return this.subtract;
    };

    this.divide = (number1 = 1) => {
        this.result = this.result / number1;

        return this.divide;
    };

    this.multiply = (number1 = 1) => {
        this.result = this.result * number1;

        return this.multiply;
    };

    this.getResult = () => {
        return this.result;
    };

    this.reset = () => {
        this.result = 0;
    };
}

const calc = new Calculator();

module.exports = calc;
