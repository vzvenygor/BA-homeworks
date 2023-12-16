/*1) Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.
Продемонструй роботу властивостей і методів.*/

class Circle {
  // Creating variable 'radius' using constructor
  constructor(radius) {
    this.radius = radius;
  }

  // Creating get-method, that return radius
  get radius() {
    return this._radius;
  }

  // Creating set-method that check input data and return changed radius
  set radius(num) {
    if (typeof num !== "number") {
      throw new Error("Error: The input is not a number");
    }
    this._radius = num;
  }

  // Creating methods, that returns diameter, square and length
  setDiameter() {
    console.log(`Diametr is equal ${Number(this._radius * 2)}`);
  }

  setSquare() {
    console.log(
      `Square is equal ${Number(Math.PI * (this._radius * 2)).toFixed(2)}`
    );
  }

  setLength() {
    console.log(
      `Length is equal ${Number(2 * Math.PI * this._radius).toFixed(2)}`
    );
  }
}

export default Circle;
