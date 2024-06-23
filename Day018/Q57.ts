// Find the Average Grade: Given a list of grades, calculate the average grade.

let grades : number[] = [56,77,87,50,91];

let averageGrades = grades.reduce((total,grades) => total + grades, 0)/grades.length;

console.log(averageGrades);

