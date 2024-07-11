// Create a Map that stores the names of countries as keys and their capitals as values. Add three countries 
// to the Map.
// The Map object in JavaScript holds key-value pairs and remembers the original insertion order of the keys. 
// It can be more efficient for large sets of data and when the key is not a string.

import { count } from "console";

var countries = new Map();
countries.set("Pakistan","Islamabad");
countries.set("England","London");
countries.set("France","Paris");
countries.set("Canada","Ottawa")
console.log(countries);

export{countries}

