// Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you 
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure 
// you actually have an empty list at the end of your program.
import { guest_list } from "../Day006/Q16.js";
for (let g of guest_list.splice(2, 4)) {
    console.log(`\nsorry ${g}, you are not invited for dinner\n`);
}
for (let guests of guest_list) {
    console.log(`${guests}, you are sill invited for dinner`);
}
console.log(guest_list.splice(1, -2));
export { guest_list };
