// Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 
// 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
let printNumber = () => {
    for (let i = 1; i < 6; i++) {
        console.log(i);
    }
};
printNumber();
export {};
