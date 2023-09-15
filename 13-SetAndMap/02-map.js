const newMap = new Map();
newMap.set("name", "Atakan");
newMap.set(1, "Js");
newMap.set(true, "isTruee");

console.log(newMap);
console.log(newMap.get(1));

//size
console.log(newMap.size);

const users = [
  { id: 1, name: "Atakan" },
  { id: 2, name: "Yavuz" },
];

newMap.set(users, 3);
console.log(newMap);

newMap.set(
  users.map((user) => user.name),
  "visited"
);

console.log(newMap);

//loops
console.log(newMap.keys());
console.log(newMap.values());
console.log(newMap.entries());

//to Object
console.log(Object.fromEntries(newMap));
