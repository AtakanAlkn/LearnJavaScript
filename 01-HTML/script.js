console.log("External Script");
document.getElementById("demo1").innerHTML = "Changed";
/* If we hadn't placed the script tag at the bottom, the DOM code wouldn't have worked 
because the HTML tags were being created after the script*/

const myAlertFunction = () => {
  alert("This function is alert ");
};

//look carefully at the outputs because outpus are different
let sum1 = 2 + 3 + 5;
console.log("result of sum1 :" + sum1);

let sum2 = 2 + 3 + "5";
console.log("result of sum2 :" + sum2);

let sum3 = "2" + 3 + 5;
console.log("result of sum3 :" + sum3);

console.log(document.location);

document.getElementById("demo1").style.backgroundColor = "red";
console.log(document.getElementById("demo4").innerHTML.toLowerCase());
let newText = document.getElementById("demo4").innerHTML.toLowerCase();
document.getElementById("demo4").innerHTML = newText;

console.log(document.getElementsByTagName("div"));

const item = document.querySelector("#list>li:last-child");
item.innerHTML = "Changed with JavaScript";

const ulDOM = document.querySelector("#list");
const newli = document.createElement("li");
const firstli = document.createElement("li");
newli.innerHTML = "Appended with JavaScript";
firstli.innerHTML = "Prepended with JavaScript";
ulDOM.append(newli);
ulDOM.prepend(firstli);

const h1Title = document.querySelector("#h1Title");
h1Title.classList.add("primaryTitle");

onChangeColor = () => {
  let isConfirm = confirm("Are you sure you want to change color?");
  isConfirm
    ? h1Title.className === "primaryTitle"
      ? (h1Title.classList.add("secondaryTitle"),
        h1Title.classList.remove("primaryTitlte"))
      : (h1Title.classList.add("primaryTitle"),
        h1Title.classList.remove("secondaryTitle"))
    : null;
};
