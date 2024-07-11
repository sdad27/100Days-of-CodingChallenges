import { calculator } from "../Q132/export1.js";
import { Subtraction, Multiplication } from "../Q132/export2.js";
let cal = new calculator(3, 4);
console.log(cal.add());
let sub = new Subtraction(12, 6);
console.log(sub.getSubtract());
let mul = new Multiplication(8, 4);
console.log(mul.getMultiply());
