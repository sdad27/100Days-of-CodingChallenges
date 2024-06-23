// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that 
// reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of 
// any size with a different message.
function make_shirt(size = "large", message = "I love typescript") {
    console.log(`I want ${size} size shirt & the ${message} print on them`);
}
make_shirt("medium", "I love typescript");
make_shirt();
make_shirt("small", "Hello saeed");
export {};
