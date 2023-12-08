import shoppingList from "./min.js";

// Норма

// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву,
// в якому продукт, що ми шукаємо, буде відсутнім)
function deliteListItem(arr, itemName) {
  const index = arr.findIndex(p => p.name === itemName);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}

// console.log(deliteListItem(shoppingList, 'potato'));

// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом,
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову.
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12,
// а кількості товарів стало 2, то сума буде 24.
const addItem = function (arr, newItem) {
  const existingProductIndex = arr.findIndex(
    (item) => item.name === newItem.name
  );

  if (existingProductIndex !== -1) {
    arr[existingProductIndex].quantity += newItem.quantity;
    arr[existingProductIndex].sum += newItem.sum;
  } else {
    arr.push(newItem);
  }

  return arr;
};

const newApple = {
  name: "apple",
  quantity: 8,
  isBought: true,
  price: 3,
  sum: 24,
};

const whiskey = {
  name: "whiskey",
  quantity: 1,
  isBought: true,
  price: 790,
  sum: 790,
};

console.log(addItem(shoppingList, whiskey));
