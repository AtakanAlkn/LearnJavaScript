let number = 12;

if (number > 15) {
  console.log(number, "is greater than 15");
} else if (number === 15) {
  console.log(number, "equals 15");
} else {
  console.log(number, "is less than 15");
}

//Ternary Operators

number == 12
  ? console.log("Ternary Operator True")
  : console.log("Ternary Operator False");

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}

const month = 10; // Ekim ayı (0'dan başlayarak, Ekim için 9 kullanılır)
const year = 2023; // İlgili yıl

const days = daysInMonth(month, year);
console.log(`Ayın gün sayısı: ${days}`);
