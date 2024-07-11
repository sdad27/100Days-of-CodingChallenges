// Explain how to handle errors in a callback pattern.

import { error } from "console";

// Explain & TIP: Handling errors in a callback pattern often involves passing an error as the first argument
// to the callback. This convention allows the callback function to check for errors before proceeding with its
// execution.

function fetchData(
    callback : (error:Error | null, data?:string) => void
):void {
    const error = "failed to fetch";
    const data = "fetch something";

    if (Math.random() > 0.5) {
        callback(null,data);
    }else{
        callback(new Error(error));
    }
}
fetchData((error, data) => {
    if (error) {
        console.error(error.message);
    }else{
        console.log(data);
    }
})