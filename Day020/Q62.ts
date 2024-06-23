// Making a Student Template: Create a blueprint for student information, including their name, age, 
// and the classes they're taking, and then fill in this blueprint with an example student.

interface Student{
    name:string;
    age:number;
    courses:string[];
}

let saeed : Student = {
    name : "saeed",
    age : 28,
    courses : ["html","css","javascript"]
}

console.log(saeed.courses[0]);
