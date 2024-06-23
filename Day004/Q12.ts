//Q12- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, but each message should be 
// personalized with the person’s name.

import { names } from "../Day004/Q11.js";


names.forEach(name => {
    console.log(`Hello ${name}, nice to meet you`);
    
});