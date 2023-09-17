/*
]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
*/

let str = `I am213 teacher 1and  I love teaching.
There is nothing as mo123re rewarding as educating and e3mpowering people.
I found teaching more interes123ting than any other 2jobs.Does this motivate you to be a teacher.
`;
//d : digits
let str2 = str.replace(/[0-9]/g, "");

console.log(str2);

/*
\: uses to escape special characters
\d mean: match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
*/
let str3 = str.replace(/\d/g, "");
console.log(str.match(/\D/g));

// . : any character except new line character(\n)
console.log(str.match(/t...e/gi)); //start :t end : e  ...: 3 characters

/*
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
*/
console.log(str.match(/^I/gi));
console.log(str.match(/r'^I'/gi));
