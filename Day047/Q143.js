// Create a Promise that resolves with "Hello, World!" after 2 seconds.
// Explain & TIP: Promises in JavaScript are used for asynchronous computations and can be in one of these 
// states: pending, fulfilled, or rejected. A Promise that resolves after a delay demonstrates how to handle 
// operations that take some time to complete, like fetching data or timing events.
let promise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
        resolve("success");
    }
    else {
        reject(new Error("failed"));
    }
});
promise.then((message) => console.log(message));
promise.catch((error) => console.log(error.message));
export {};
