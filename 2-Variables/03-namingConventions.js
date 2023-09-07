/*
- When defining variables, we follow certain naming conventions. 
- One of these conventions is "camelCase,"where the first letter of the first word in the variable name is lowercase, 
and the initial letters of subsequent words are capitalized. 
- For example, "camelCase" or "myVariableName."

- However, for constants defined with const that won't change afterward, 
a different convention is applied. 
- Such constants are typically written entirely in uppercase,and underscores (_) are often used between words. 
- For instance, "MAX_VALUE" or "PI."
- These naming conventions help make the code more readable and 
understandable while also establishing a standard among developers to maintain code consistency.
 */

/* 
A JavaScript name must begin with:

A letter (A-Z or a-z)
A dollar sign ($)
Or an underscore (_)
Subsequent characters may be letters, digits, underscores, or dollar signs.

*/

//Recommended
const PASSWORD = "ıweş_.2362xcSAEs.2";
const API_KEY = "12313saj21ş3s6d";
const Pİ = 3.182391;

let myCarName = "Mercedes";
let isPressed = true;

// Usage Backslash
let paragraph =
  " Hello\
Hellooooo \
helloooooo";

console.log(paragraph);

console.log("Atakan\nAlkan");
console.log("Atakan Alkan's\\25");

// Recommended Template Literals
const myName = "John";
const age = 30;

const message = `Hi, my name is ${myName} and  ${age} years old.`;

console.log(message);

const multiLineText = `\n\nHi
my     22222
name
is
Atakan`;
console.log(multiLineText);
