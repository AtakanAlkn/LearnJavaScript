//Destructuring

const arr = [10, 20, 30, 40];
const [first, second, ...rest2] = arr;
console.log(first, second);
console.log(rest2);

const newArr = [
  ["JS", "REACT", "HTML"],
  ["PYTHON", "JAVA", "SWİFT"],
];
const [[a, c], b] = newArr; //Nested array
console.log(a, c, b);

const [z, , x] = arr; //Skip on of the value , ,
console.log(`z: ${z} x: ${x}`);

const arr2 = [1, 2, undefined, 4];
const [a1, b1, c1 = 5] = arr2;
//console.log(c1);

//...rest
const names = ["Atakan", "Mehmet", "Ali", "Veli"];
const [name1, , ...rest] = names;
//console.log(name1);
//console.log(rest);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
  ["Turkey", "Istanbul"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}
