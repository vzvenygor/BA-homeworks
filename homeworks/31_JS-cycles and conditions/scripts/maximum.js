// Максимум

/* Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 
і відгадай його наступним способом: кожну ітерацію циклу діли діапазон чисел навпіл, 
записуй результат в N і питай у користувача «Ваше число> N, <N або == N?».
Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, 
поділи навпіл і отримай 50. Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. 
І так до тих пір, поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").*/
const num = +prompt("Введіть число");
let minRange = 0;
let maxRange = 100;
let userAnswer = "";

while (true) {
  const guess = Math.floor((minRange + maxRange) / 2);
  userAnswer = prompt(
    `Ваше число більше (>), менше (<) чи дорівнює (=) ${guess}? Введіть один з символів.`
  );
  if (userAnswer === ">") {
    minRange = guess + 1; // Змінюємо мінімальний діапазон
  } else if (userAnswer === "<") {
    maxRange = guess - 1; // Змінюємо максимальний діапазон
  } else if (userAnswer === "=") {
    alert(`Ваше число - ${guess}! Гра завершена.`);
    break;
  } else {
    alert("Будь ласка, введіть коректний символ (> , < або =).");
  }
}

// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.
const numUser = prompt("введіть від 2 до 9");
let result = 0;
let strng = "";

if (numUser >= 2 && numUser <= 9) {
  for (let i = 1; i <= 10; i++) {
    result = numUser * i;
    strng = strng + result + ", ";
  }
}

/* Запитай дату (день, місяць, рік) і виведи наступну за нею дату. 
Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.*/
const day = +prompt("введіть день");
const month = +prompt("введіть місяць");
const year = +prompt("введіть рік");

let nextDay = day;
let nextMonth = month;
let nextYear = year;

if (day >= 1 && day <= 29) {
  nextDay += 1;
} else if (day === 30) {
  nextDay = 1;
}
if (day > 30) {
  nextMonth += 1;
}
if (month >= 1 && month <= 11 && day === 30) {
  nextMonth += 1;
} else if (month === 12 && day === 30) {
  nextMonth = 1;
}
if (month === 12 && day === 30) {
  nextYear += 1;
}
const date = `${nextDay} ${nextMonth} ${nextYear}`;

export { strng, date };
