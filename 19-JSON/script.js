function Func() {
  fetch("./user.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data));
}

console.log(Func());

//to Object JSON.parse()

// to JSON JSON.stringfy()
const user = [
  {
    name: "Atakan",
    id: 1,
  },
  { name: "Alkan", id: 2 },
];

console.log(JSON.stringify(user, ["name"], 1));
