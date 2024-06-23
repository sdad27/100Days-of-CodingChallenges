// Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. 
// It should log each hobby with a statement saying you enjoy that hobby.
function hobbies(...hobbies) {
    hobbies.forEach(hobby => {
        console.log(`I love ${hobby}`);
    });
}
hobbies("swiming", "coding", "to play cricket");
export {};
