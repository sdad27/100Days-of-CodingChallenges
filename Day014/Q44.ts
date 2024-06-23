// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. Call the function three times, 
// using a different number of arguments each time.

function sandwitch(...items:string[]) {
    console.log("the order of the sandwitch with the following items");
    items.forEach(item => {
        console.log(`-${item}`);
        
    });
    console.log(`\n`);
    
}

sandwitch("cheese","ham","tomato");
sandwitch("garlic","chicken");
sandwitch("onion","ham","mayo","chicken","cheese");