/*2) Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором; текст виводиться доти, доки в маркері є чорнило; 
один не пробільний символ — це 0,5 % чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

Продемонструй роботу написаних методів.*/

class Marker {
  constructor(color, inkPercentage) {
    this.color = color;
    this.inkPercentage = inkPercentage;
  }

  write(text) {
    Array.from(text).forEach((char) => {
      if (this.inkPercentage > 0) {
        if (char !== " ") {
          // Each non-whitespace character consumes 0.5% ink
          this.inkPercentage -= 0.5;
        }
        console.log(`Writing "${char}" with ${this.color} marker. The ${this.inkPercentage}% of ink has left`);
      } else {
        console.log("Out of ink!");
      }
    });
  }
}

// Class that describing a refillable marker
class RefillableMarker extends Marker {
  constructor(color, inkCapacity) {
    super(color, 50); // Initial ink amount 50%
    this.inkCapacity = inkCapacity;
  }

  refill() {
    this.inkPercentage = this.inkCapacity;
    console.log(`Marker refilled. Current ink level: ${this.inkPercentage}%`);
  }
}

export { Marker, RefillableMarker };
