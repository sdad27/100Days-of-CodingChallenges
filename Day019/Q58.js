// Average Score Calculator: Write a simple program that can take lots of scores and find their average.
let averageScore = (...scores) => {
    let total = scores.reduce((sum, score) => sum + score, 0) / scores.length;
    return total;
};
console.log(averageScore(56, 77, 87, 50, 91));
export {};
