function Calculator() {
    this.result = 0;

    this.add = (number = 0) => {
        this.result = this.result + number;

        return this;
    };

    this.subtract = (number = 0) => {
        this.result = this.result - number;

        return this;
    };

    this.divide = (number = 1) => {
        this.result = this.result / number;

        return this;
    };

    this.multiply = (number = 1) => {
        this.result = this.result * number;

        return this;
    };

    this.getResult = () => {
        return this.result;
    };

    this.reset = () => {
        this.result = 0;

        return this;
    };

    this.setState = (state = 0) => {
        this.result = state;

        return this;
    };

    this.fetchData = (func) => {
        setTimeout(func.bind(this, 500), 5000);

        return this;
    };
}

const calculator = new Calculator();

module.exports = calculator;
