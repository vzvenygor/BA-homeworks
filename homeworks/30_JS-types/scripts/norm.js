// Норма //

/* Користувач вводить суму грошей в гаманці і ціну однієї шоколадки. 
Програма виводить скільки шоколадок може купити користувач і скільки здачі у нього залишиться.*/
const sumCurrency = +prompt("Введіть суму грошей в гаманці");
const price = +prompt("Введіть ціну однієї шоколадки");
const quantity = Math.floor(sumCurrency / price);
const balance = Number(sumCurrency % price);
const result = `За ${sumCurrency} грн ви зможете купити ${quantity} шоколадок і у вас залишиться ${balance} грн.`;

/*Запитай у користувача тризначне число і виведи його задом наперед. 
Для вирішення завдання тобі знадобиться оператор % (залишок від ділення).*/
const userNum = +prompt("Введіть тризначне число");
const firstNum = userNum % 10;
const secondNum = Math.floor((userNum % 100) / 10);
const thirdNum = Math.floor((userNum % 1000) / 100);
const reverseNum = `Перевернуте число: ${firstNum}${secondNum}${thirdNum}`;

export { result, reverseNum };
