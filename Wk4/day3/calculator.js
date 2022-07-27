class Calculator {
    constructor() {
        this.total = 0;
    }

    add(num) {
        this.total += num;
        return this.total;
    }

    subtract(num) {
        this.total -= num;
        return this.total;
    }

    divide(num) {
        this.total /= num;
        return this.total;
    }

    multiply(num) {
        this.total *= num;
        return this.total;
    }
}

module.exports = Calculator;