// Мінімум

/*Створи об'єкт, що описує автомобіль 
(виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), 
і наступні методи для роботи з цим об'єктом:*/
const car = {
  producer: "Mazda",
  model: "CX-3",
  year: 2019,
  "average speed": 70,
  "fuel tank volume": 60,
  "average fuel consumption per 100 km": 8.5,
  driver1: "Volodymyr Zelenskyi",
  driver2: "Petro Poroshenko",
};

// Метод, який виводить на екран інформацію про автомобіль.
function setObj() {
  for (let key in car) {
    console.log(`${key}: ${car[key]}`);
  }
}

// Додавання ім’я водія у список

const newDriver = function (newDriverName) {
  return Object.assign(car, { driver3: newDriverName });
};

newDriver("Viktor Yuschenko");

setObj();

// Перевірка водія на наявність його ім’я у списку
function isDriver(driverName) {
  for (let value in car) {
    if (car[value] === driverName) {
      return `${driverName} is a driver`;
    }
  }
  return `${driverName} not a driver`;
}

console.log(isDriver("Viktor Yuschenko"));

/*Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. 
Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.*/
function calcTimeFuel(distance) {
  const averSpeed = car["average speed"];
  const consumption = car["average fuel consumption per 100 km"];

  let time = +(distance / averSpeed).toFixed();
  let fuel = +(distance / consumption / 10).toFixed(2);
  let extraTime = 0;

  console.log(`To drive ${distance} km you need ${fuel} liters of fuel`);

  if (time <= 4) {
    console.log(`Time, whithout 1 hour of rest, is about ${time} hours`);
  } else {
    extraTime = (time / 4 + time).toFixed();
    console.log(`Time, including 1 hour of rest, is about ${extraTime} hours`);
  }
}

calcTimeFuel(1500);
