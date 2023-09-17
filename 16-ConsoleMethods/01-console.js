//console.log()
console.log("30 days of JavaScript");
console.log("%d days of %s", 30, "JavaScript");

//CSS
console.log(
  "%c30 %cDays Of %cJavaScript",
  "color:green;font-size:20px",
  "color:red",
  "background-color:black; color:lime"
);
console.log("%cHi I'm Atakan", "color:red;font-size:22px");

//console.war()
console.warn("Use browser console to see the difference");

//console.error()
console.error("Error");

//console.table()
console.table(["Atakan", "Alkan"]);

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

//console.time()
/*
console.time("Time");
console.log(new Array(10e6).fill());
console.timeEnd("Time");
*/

//console.info() => console.log
console.info("30 Days Of JavaScript");

//console.assert()
console.assert(5 < 3, "5 is less than 3 : false ");
console.assert(5 > 3, "3 is less than 5 : true");

//console.group()
console.group("Name");
console.table(users.map((user) => user.name));
console.groupEnd();

console.group("Error");
console.error("Error");
console.groupEnd();

//console.count()
const myFunc = () => {
  console.count("Called");
};
myFunc();
myFunc();

//console.clear()
