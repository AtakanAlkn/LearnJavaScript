class Person {
  constructor(firstName, lastName, age, country = "Turkey", city) {
    this.name = firstName;
    this.surName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.skills = ["HTML", "CSS"];
  }
  getFullName() {
    return this.name + " " + this.surName;
  }
  getAge() {
    return this.age;
  }
  get getSkills() {
    return this.skills;
  }
  set setSkill(skill) {
    this.skills.push(skill);
  }
  static getTimeStamp() {
    return +new Date();
  }
  deneme() {
    return Person.getTimeStamp();
  }
}

const person = new Person("Atakan", "Alkan", 22, "Turkey", "Istanbul");
const person2 = new Person("Mehmet", "Tatlıses", 52, "Turkey", "Adana");
const person3 = new Person("Bahar", "Hamza", 39, undefined, "Hatay");
console.log(person, person2, person3);
console.log(person.getFullName());
console.log(person2.getAge());

//getter
console.log(person.getSkills);

//settet
person.setSkill = "JavaScript";
console.log(person.getSkills);

console.log(Person.getTimeStamp());

//Inheritance
class Inventor extends Person {
  constructor(firstName, lastName, age, country = "Turkey", city, gender) {
    super(firstName, lastName, age, country, city);
    this.gender = gender;
  }
  jeffWho() {
    console.log("I am the richest person in the world");
  }
  getFullName() {
    return super.getFullName() + " " + this.gender;
  }
}

const inventor = new Inventor(
  "Elon",
  "Musk",
  52,
  "South Africa",
  "Pretoria",
  "Male"
);
inventor.getSkills.splice(0);
inventor.setSkill = "Tesla";
inventor.setSkill = "SpaceX";
console.log(inventor);
inventor.jeffWho();
console.log(inventor.gender);
console.log(inventor.getFullName());
