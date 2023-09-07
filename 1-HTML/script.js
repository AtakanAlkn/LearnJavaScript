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
