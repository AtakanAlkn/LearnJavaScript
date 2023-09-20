localStorage.setItem("Name", "Atakan");
localStorage.setItem("SurName", "Alkan");
localStorage.setItem("Number", "1");
console.log(localStorage.key(0));
console.log(localStorage);
console.log(localStorage.getItem("SurName"));
localStorage.removeItem("SurName");
console.log(localStorage);
localStorage.clear();
console.log(localStorage);

const user = {
  name: "Atakan",
  surName: "Alkan",
};

localStorage.setItem("user", JSON.stringify(user));
console.log(JSON.parse(localStorage.getItem("user")));
