// Take a JSON string and parse it into a JavaScript object.

// Explain & TIP: JSON.parse() is used to convert a JSON string into a JavaScript object. This is 
// particularly useful when dealing with data received as JSON from a web server or API.

import { jasonString, person } from "../Day044/Q133.js";

let jsonparse = JSON.parse(jasonString);
console.log(jsonparse);


