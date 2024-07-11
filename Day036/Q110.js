// Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function gradeAssign(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
console.log(gradeAssign(91));
console.log(gradeAssign(85));
console.log(gradeAssign(73));
console.log(gradeAssign(66));
console.log(gradeAssign(55));
export {};
