// No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

let username :string[] = ["saeed","ahmed","ali"];

if (username.length > 0) {
    console.log("we have users");
    
}

username.length = 0;

if (username.length === 0) {
    console.log("we need find some users !");
    
}
