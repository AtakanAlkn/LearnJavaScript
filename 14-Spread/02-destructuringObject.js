const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

//When we destructure the name of the variable
// we use to destructure should be exactly the same as the key or property of the object.
//See the example below.
const { height } = rectangle;
const { width: triangleWidth, area = 100 } = rectangle; // renaming

console.log(height);
console.log(triangleWidth);
console.log(area);

const user = {
  name: "Atakan",
  surName: "Alkan",
  age: 22,
  skills: {
    frontend: ["HTML", "CSS", "JAVASCRİPT"],
    backend: ["nodeJS", "JAVA"],
  },
};

//Nested destructuring
const myFunc = ({
  name,
  skills: {
    frontend,
    backend: [first],
  },
  ...others
}) => {
  console.log(name, frontend + " and " + first);
  console.log(others);
};
myFunc(user);
