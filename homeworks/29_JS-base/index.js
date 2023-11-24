//Норма//

const USER_NAME = prompt("Як тебе звати?");
console.log(`Привіт, ${USER_NAME}!`);

const YEAR = +prompt(`${USER_NAME}, введи свій рік народження`);
const CURRENT_YEAR = 2023;
let age = CURRENT_YEAR - YEAR;
console.log(`Гм, значить тобі ${age} років`);

const LENGTH = +prompt(`${USER_NAME}, введи довжину сторони квадрату`);
let perimeter = 4 * LENGTH;
console.log(`Периметр такого квадрата рівний ${perimeter}`);

//Максимум//

const RADIUS = +prompt("Введи радіус кола");
let circleArea = Math.PI * RADIUS ** 2;
console.log(`Площа такого кола становитиме ${circleArea}`);

const LENGTH_CITY = +prompt("Веди відстань між двома містами у кілометрах");
const time = +prompt("За скільки годин ти хочеш дістатися до іншого міста?");
let speed = LENGTH_CITY / time;
console.log(
  `Щоб встигнути вчасно, тобі потрібно рухатися зі швидкісттю ${speed} км/год`
);

const DOLLARS = +prompt("Скільки доларів бажаєш обміняти на євро?");
const EXCHANGE_RATE = 0.92;
let counter = DOLLARS * EXCHANGE_RATE;
console.log(`За ${DOLLARS} доларів ти зможеш отримати ${counter} євро`);
