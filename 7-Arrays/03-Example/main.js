const countries = require("./countries");
const webTechs = require("./webTechs");

console.log(countries);
console.log(webTechs);

let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

const wordsArray = text.split(" ");

const wordCount = wordsArray.length;

console.log(wordsArray); // Array of words
console.log(`Number of words: ${wordCount}`); // Number of words
