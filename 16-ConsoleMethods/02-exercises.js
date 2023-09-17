const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.group("Array");
console.table(countries);
console.groupEnd();

const countryObjects = countries.map(([name, capital]) => ({ name, capital }));
console.group("Object");
console.table(countryObjects);
console.groupEnd();

console.assert(10 > 2 * 10, "False");
console.warn("is warning message");
console.error("is error message");

console.time("While");
let i = 0;
while (i < 5) {
  i++;
}
console.timeEnd("While");

console.time("For");
for (let i = 0; i < 5; i++) {}
console.timeEnd("For");

console.time("ForOf");
const Arr = [0, 1, 2, 3, 4, 5];
for (const i of Arr) {
}
console.timeEnd("ForOf");
