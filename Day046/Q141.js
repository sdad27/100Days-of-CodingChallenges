// Discuss the significance of the await reserved word in asynchronous JavaScript.
// Explain & TIP: The await operator is used to wait for a Promise to settle. It can only be used inside 
// an async function. Using await makes asynchronous code look and behave a little more like synchronous code, 
// which can make it easier to understand and debug.
async function fetchData() {
    const response = await fetch('https://github.com/AsharibAli/100-days-of-code/blob/main/day-47/q141/main.ts');
    const data = await response.json();
    console.log(data);
}
export {};
