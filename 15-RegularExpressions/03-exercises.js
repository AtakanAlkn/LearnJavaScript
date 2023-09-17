const str = `Hello! My phone number is +1 (123) 456-7890. 
You can also reach me at email@example.com. 
I have $500 in my wallet, and the price of the item is €25.99. 
The date is 10/15/2023, and the time is 14:30. 
Don't forget to visit www.example.com for more information!`;

console.log(str.match(/[0-9]+/g));
