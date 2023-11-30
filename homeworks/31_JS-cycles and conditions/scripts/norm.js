// Норма

// Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
const userNum = +prompt("Enter a five-digit number");
let palindrome = "";

if (userNum > 99999 || userNum < 10000) {
  palindrome = "You should enter five-digit number. Try again";
} else if (userNum === +userNum.toString().split("").reverse().join("")) {
  palindrome = `Number ${userNum} is palindrome`;
} else {
  palindrome = `Number ${userNum} is not palindrome`;
}

/* Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%.*/
const sum = +prompt("Enter the sum");
let discount = 0;

if (sum >= 200 && sum <= 300) {
  discount = sum - sum * 0.03;
} else if (sum >= 301 && sum <= 500) {
  discount = sum - sum * 0.05;
} else if (sum >= 501) {
  discount = sum - sum * 0.07;
} else {
  discount = "You haven't any disconts";
}

/*Зацикли відображення днів тижня таким чином: «День тижня. 
Хочеш побачити наступний день?» і так до тих пір, поки користувач натискає OK.*/
const DAYS = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
  "Неділя",
];
let currentDay = 0;

while (confirm(`${DAYS[currentDay]}. Хочеш побачити наступний день?`)) {
  currentDay = (currentDay + 1) % DAYS.length;
}

export { palindrome, discount };
