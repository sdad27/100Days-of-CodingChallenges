// Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and 
// b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swapValues() {
    let a = 5;
    let b = 10;
    console.log(`a = ${a} and b = ${b}\n`);
    let temp = a;
    a = b;
    b = temp;
    console.log(`\n SWAPPING VALUES`);
    console.log(`a = ${a} and b = ${b}`);
}
swapValues();
export {};
