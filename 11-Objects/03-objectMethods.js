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
};

const newUser = Object.assign({}, user); // or
const newUser2 = { ...user };
console.log(newUser);
console.log(newUser2);

console.log(Object.keys(newUser2));
console.log(Object.values(newUser2));

console.log(Object.entries(user));

for (let [i, n] of Object.entries(user)) {
  console.log(i, n);
}

console.log(user.hasOwnProperty("userName")); // output: true

Object.freeze(user); //immutable
Object.seal(user); // for just allow assign
