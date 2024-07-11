// Create two modules; one that exports a class, and another that imports the class and creates an instance.
// Explain & TIP: Classes can be modularized in the same way as functions. This encapsulation and reusability 
// is a cornerstone of modern JavaScript application structure.
import { animal } from "../Q131/exportfile.js";
let c1 = new animal("Cat");
c1.makeSound();