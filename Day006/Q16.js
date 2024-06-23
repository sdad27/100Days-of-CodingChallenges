// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more 
// guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing 
// people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
import { guest_list } from "../Day005/Q15.js";
guest_list.unshift("moiz");
guest_list.splice(1, 0, "masood");
guest_list.push("omar");
guest_list.forEach(guest => {
    console.log(`\nDear ${guest}, I would like to invite you to dinner`);
});
console.log("I have found a bigger dinner table so I invite more guests");
export { guest_list };
