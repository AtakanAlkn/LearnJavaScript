const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};
let arr = [];
let arr2 = [];
let arr3 = [];
for (const key in users) {
  users[key].isLoggedIn === true ? arr.push(users[key].isLoggedIn) : null;
  users[key].points === 50 ? arr2.push(users[key].points) : null;

  users[key].skills.includes("MongoDB" && "Express" && "React" && "Node") ===
  true
    ? arr3.push(users[key])
    : null;
}
console.log(arr.length);
console.log("50 :", arr2.length);
console.log("MERN", arr3);

const newUserData = {
  Atakan: {
    email: "atakan@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 23,
    isLoggedIn: true,
    points: 50,
  },
};
const newUserList = { ...newUserData, ...users };

console.log(newUserList);
