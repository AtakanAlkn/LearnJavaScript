let a = 20;
let b = 10;

console.log((a += b));
console.log((a -= b));
console.log((a *= b));
console.log((a /= b));
console.log((a %= b));
console.log((a **= b));

let number = 55;
let number2 = 12;
let stringNumber = "55";

console.log(number == stringNumber); // output : true
console.log(number === stringNumber); // output : false

let comparison = number > number2;
console.log(comparison); //output : true
let comparison2 = number === stringNumber;
console.log(comparison2); // output : false

console.log("True and false : ", comparison && comparison2); // And
console.log("True or false : ", comparison || comparison2); //Or
console.log("True of !false :", comparison && !comparison2); //! = not

//Pre-increment
let count = 0;
console.log(++count);
console.log(count);

//Post-increment
let count2 = 0;
console.log(count2++);
console.log(count2);

let x = 5;
let y = x++;
console.log(y); // output :5

// Exercises
let i = 0;
while (i < 5) {
  console.log(`Bu ${i}. SAYIDIR`);
  i++;
}
