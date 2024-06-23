// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send 
// out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating 
// the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person 
// you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

import { guest_list } from "../Day005/Q14.js";

guest_list.forEach(guest => {
    console.log(`\nDear ${guest}, I would like to invite you to dinner\n`);
    
});

console.log(`${guest_list[2]} is not coming for some reason\n`);

guest_list[2] =  "hamza";

for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear ${guest_list[i]}, I would like to invite you to dinner`);
    
    
}

export{guest_list};
