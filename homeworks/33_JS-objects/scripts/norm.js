// Норма

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
const objTime = {
  hour: 0,
  minute: 0,
  second: 0,
};

// Для виведення часу на екран.
const setTime = () => {
  const formattedHour = objTime.hour.toString().padStart(2, "0");
  const formattedMinutes = objTime.minute.toString().padStart(2, "0");
  const formattedSeconds = objTime.second.toString().padStart(2, "0");

  return `${formattedHour} : ${formattedMinutes} : ${formattedSeconds}`;
}

// Зміни часу на передану кількість секунд.
const setSeconds = (seconds) => {
  let secondsToSeconds = (seconds % 60);
  let secondsToMinute = Math.floor((seconds / 60) % 60);
  let secondsToHour = Math.floor(seconds / 3600);
  let newSecond = objTime.second + secondsToSeconds;
  let newMinute = objTime.minute + secondsToMinute;
  let newHour = objTime.hour + secondsToHour;

  if (seconds > 60) {
      return Object.assign(objTime, {second: newSecond}, {minute: newMinute}, {hour: newHour});
  } else
      return Object.assign(objTime, {second: seconds});
}

console.log(setSeconds(89));

// Зміни часу на передану кількість хвилин.
const setMinutes = (minutes) => {
  let minutesToMinutes = (minutes % 60);
  let minutesToHours = Math.floor((minutes / 60) % 60);
  let newMinute2 = objTime.minute + minutesToMinutes;
  let newHour2 = objTime.hour + minutesToHours;

  if (minutes > 60) {
      return Object.assign(objTime, {minute: newMinute2}, {hour: newHour2});
  } else
      return Object.assign(objTime, {minute: minutes});
}

console.log(setMinutes(89));

// Зміни часу на передану кількість годин.
const setHours = (hours) => {
  let hourToHours = (hours % 24);
  let hourToDays = (hours / 24) % 24;
  let newHour3 = objTime.hour + hourToHours;
  let newDay = hourToDays;

  if (hours > 24) {
      return Object.assign(objTime, {hour: newHour3}, {day: 'It`s another day'});
  } else
      return Object.assign(objTime, {hour: hours});
}

console.log(setHours(32));
console.log(setTime());


/*Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». 
Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.*/