/*
g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline

*/
let str = "I am Atakan Alkan and I am learning JavaScript";

//create
let pattern = "Javascript";
let flag = "gi";
const regEX = new RegExp(pattern, flag); // const regEx=new RegExp("Javascrip","gi")
const regEX2 = /Javascrip/gi;

//test
const word = /JavaScript/;
const word2 = /JaVaSCRipt/i;
//console.log(word.test(str));
//console.log(word2.test(str));

//match
//console.log(str.match(word));
//console.log(str.match(/I/g));
//console.log(str.match(regEX));

// search : find index
//console.log(str.search(/am/));

//replace
const txt =
  "Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";

matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);
