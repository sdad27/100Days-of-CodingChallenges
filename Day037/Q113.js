// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
// You can check for the presence of a key in a Map with the .has() method and retrieve its value with the 
// .get() method.
import { countries } from "../Day037/Q112.js";
function countryExist(countries) {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada id ${countries.get("Canada")}`);
    }
    else {
        console.log("The country Canada is not exist");
    }
}
countryExist(countries);
