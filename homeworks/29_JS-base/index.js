//Норма//

const userName = prompt("Як тебе звати?");
console.log(`Привіт, ${userName}!`);

const year = +prompt(`${year}, введи свій рік народження`);
const CURRENT_YEAR = 2023;
let age = CURRENT_YEAR - year;
console.log(`Гм, значить тобі ${age} років`);

const length = +prompt(`${userName}, введи довжину сторони квадрату`);
let perimeter = 4 * length;
console.log(`Периметр такого квадрата рівний ${perimeter}`);

//Максимум//

const radius = +prompt("Введи радіус кола");
let circleArea = Math.PI * radius ** 2;
console.log(`Площа такого кола становитиме ${circleArea}`);

const lenghtCity = +prompt("Веди відстань між двома містами у кілометрах");
const time = +prompt("За скільки годин ти хочеш дістатися до іншого міста?");
let speed = lenghtCity / time;
console.log(
  `Щоб встигнути вчасно, тобі потрібно рухатися зі швидкісттю ${speed} км/год`
);

const dollars = +prompt("Скільки доларів бажаєш обміняти на євро?");
const exchangeRate = 0.92;
let counter = dollars * exchangeRate;
console.log(`За ${dollars} доларів ти зможеш отримати ${counter} євро`);
