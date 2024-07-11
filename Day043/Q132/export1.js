class calculator {
    num1;
    num2;
    constructor(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    }
    add() {
        return this.num1 + this.num2;
    }
}
export { calculator };
