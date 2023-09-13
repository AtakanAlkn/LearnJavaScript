const object = {}; // empty object
console.log(typeof object);

const user = {
  userName: "Atakan",
  surName: "Alkan",
  age: 22,
  skills: ["HTML", "CSS", "JavaScript", "React Native"],
  cars: [
    {
      carName: "Mercedes",
    },
    {
      carName: "Porsche",
    },
  ],
  "phone number": 213213213, // recommended phoneNumber
  getFullName: function () {
    console.log(`${this.userName} ${this.surName}`);
  },
  getSkills: () => {
    console.log(`${user.skills}`);
  },
};
console.log(user.cars.map((car) => car.carName));
console.log(user["phone number"]);
const keyWord = "userName";
console.log(user[keyWord]); // dynamically
user.getFullName();

user.age = 23;
console.log(user.age);

console.log(user.cars.map((item) => item));

user.isAvailable = true; // add property
console.log(user);

keys = Object.entries(user);

for (let i of keys) {
  console.log(i);
}

function myFunction(obj) {
  return obj?.a?.b || undefined;
}

console.log(myFunction({ a: { b: { c: 3 } } }));
