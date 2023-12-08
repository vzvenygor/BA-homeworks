import shoppingList from "./min.js";

// Максимум

// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
function sumAllProducts(arr) {
    return arr
    .map((item) => item.sum)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// console.log(sumAllProducts(shoppingList));

// Підрахунок суми всіх (не) придбаних продуктів.
function notPurchased(arr) {
  return arr
    .filter((item) => !item.isBought)
    .map((item) => item.sum)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// console.log(notPurchased(shoppingList));

// Показання продуктів в залежності від суми,
// (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)
function sortSum(arr) {
  return arr.sort((a, b) => b.sum - a.sum);
}

// console.log(sortSum(shoppingList));
