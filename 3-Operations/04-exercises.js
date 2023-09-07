const customString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Labore accusantium sequi a quidem nam unde explicabo facere excepturi consequatur soluta.`;
const customNumber = 10;
const customNumber2 = 2;

Math.abs(-10); //10
Math.ceil(10.2); //11
Math.floor(12.3); //12
Math.round(12.8); //13
Math.max(2, 4, 8, 9, 12, 14, 11); //14
Math.min(2, 3, 6, 1); // 1
console.log(Math.floor(Math.random() * 101));
console.log(Math.pow(2, 4));
console.log(Math.sqrt(25));

console.log(customString.charAt(6));
console.log(customString.endsWith("oluta."));
console.log(customString.includes("dolor"));
console.log(customString.indexOf("o"));
console.log(customString.lastIndexOf("o"));
console.log(customString.replaceAll("o", "2"));
console.log(customString.substring(0, 12));
console.log(customString.slice(-5));
console.log(customString.split(" "));

const text = "I Am In Türkiye";
console.log(text.toLocaleLowerCase("tr-TR")); // "ı am in türkiye"

console.log(typeof customNumber.toString());
console.log(typeof "5");
console.log(typeof +"5");

currentDate = new Date();
console.log(currentDate.getHours());

let newString = customString.replaceAll(" ", "");
console.log(newString);
console.log(newString.includes("umsequi"));
