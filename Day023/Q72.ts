// Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both 
// let and const. Show how variables declared inside the block are not accessible outside of it.

{
    let blockLet : string = "visible in this block";
    const blockConst : string = "also visible in this block";

    console.log(blockLet);
    console.log(blockConst);
}

// try {
//     console.log(blockLet);
    
// } catch (error) {
//     console.log(error);   
// }

// try {
//     console.log(blockConst);
    
// } catch (error) {
//     console.log(error);
    
// }


//I comment this block of code because error will be generate to my next file. if you will be copy my 
//code you uncomment the block of code 