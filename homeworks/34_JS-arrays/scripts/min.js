// Мінімум

// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту,
// кількість і куплений він чи ні, ціну за одиницю товару, сума.
const shoppingList = [
  { name: "bread", quantity: 1, isBought: true, price: 20, sum: 20 },
  { name: "butter", quantity: 1, isBought: false, price: 50, sum: 50 },
  { name: "milk", quantity: 2, isBought: false, price: 19, sum: 38 },
  { name: "potato", quantity: 10, isBought: false, price: 1, sum: 10 },
  { name: "apple", quantity: 8, isBought: true, price: 3, sum: 24 },
];

// Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти,
// що ще не придбані, а потім - ті, що вже придбали.

const sortListByBought = (a, b) => (a.isBought < b.isBought ? -1 : 1);
const sortedList = [...shoppingList].sort(sortListByBought);

// console.log(sortedList);

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
function purchaseProducts(arr, someName) {
  const productToUpdate = arr.find((product) => product.name === someName);
  if (productToUpdate) {
    productToUpdate.isBought = true;
  }
  return productToUpdate;
}

// console.log(purchaseProducts(shoppingList, "potato"));

export default shoppingList;
