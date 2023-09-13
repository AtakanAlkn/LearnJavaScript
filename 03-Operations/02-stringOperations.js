//String is a primitive data types
let userName = "AtakanAlkan";
//returns to number of characters
console.log(userName.length);

console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.substring(0, 6));
console.log(userName.substring(5));
console.log(userName.slice(7));
console.log(userName.slice(-2));

const userString = "Lorem ipsum dollar Lorem";
console.log(userString.split(" "));
console.log(userName.split(""));

const space = " Atakan ";
console.log(space.trim());

console.log(userString.includes("Lorem")); // true
console.log(userString.includes("lorem")); //false

console.log(userString.indexOf("ipsu"));
console.log(userString.indexOf("I")); //output: -1
console.log(userString.lastIndexOf("L"));

console.log(userString.replace("Lorem", "Atakan"));
console.log(userString.replaceAll("Lorem", "Atakan"));

console.log(userString.charAt(2));
console.log(userString.charCodeAt(0)); //ASCII Code

console.log(userString.startsWith("lorem"));
console.log(userString.endsWith("em"));

console.log(userName.repeat(8));

console.log(userName.concat(userString, space));

//RegExp
console.log(userString.search("psum"));
