class Subtraction {
    num1;
    num2;
    constructor(a, b) {
        this.num1 = a;
        this.num2 = b;
    }
    getSubtract() {
        return this.num1 - this.num2;
    }
}
class Multiplication {
    num1;
    num2;
    constructor(a, b) {
        this.num1 = a;
        this.num2 = b;
    }
    getMultiply() {
        return this.num1 * this.num2;
    }
}
export { Subtraction, Multiplication };
