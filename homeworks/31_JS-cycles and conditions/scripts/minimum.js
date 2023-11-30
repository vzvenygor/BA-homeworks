// Мінімум

/*Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), 
дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.*/
const userAge = +prompt("Enter your age");
let message = "";

if (userAge === 0 && userAge <= 11) {
  message = "You are child";
} else if (userAge >= 12 && userAge <= 17) {
  message = "You are teenager";
} else if (userAge >= 18 && userAge <= 59) {
  message = "You are adult";
} else if (userAge >= 60 && userAge <= 120) {
  message = "You are pensioner";
} else {
  message = "Enter a correct age";
}

/*Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, 
який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).*/
const userNumber = +prompt("Enter a number from 0 to 9");

let outputSymbol =
  userNumber === 0
    ? ")"
    : userNumber === 1
    ? "!"
    : userNumber === 2
    ? "@"
    : userNumber === 3
    ? "#"
    : userNumber === 4
    ? "$"
    : userNumber === 5
    ? "%"
    : userNumber === 6
    ? "^"
    : userNumber === 7
    ? "&"
    : userNumber === 8
    ? "*"
    : userNumber === 9
    ? "("
    : "Incorrect value. Try again";

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let firstNum = +prompt("Enter first number");
let secondNum = +prompt("Enter second number");
let sum = 0;

while (firstNum <= secondNum) {
  sum += firstNum;
  firstNum++;
}

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// Функція для знаходження НСД
function findGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

// Запит користувача на введення двох чисел
const number1 = parseInt(prompt("Введіть перше число: "));
const number2 = parseInt(prompt("Введіть друге число: "));
let gcd = 0;

// Перевірка чи введені коректні числа
if (isNaN(number1) || isNaN(number2)) {
  console.log("Будь ласка, введіть коректні числа.");
} else {
  // Знаходження та виведення результату
  gcd = findGCD(number1, number2);
  // console.log(`Найбільший спільний дільник ${number1} і ${number2} є: ${gcd}`);
}

// Запитай у користувача число і виведи всі дільники цього числа.
const a = +prompt("Enter number");
let dividers = 0;
let str = "";

for (let i = 1; i <= a; i++) {
  if (a % i === 0) {
    dividers = i;
    str = str + dividers;
  }
}

export { message, outputSymbol, sum, gcd, str };
