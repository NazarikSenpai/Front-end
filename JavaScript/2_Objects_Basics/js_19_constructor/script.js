'use strict';
function User(name, age, sayHiToMe) {
  //this = {}; неявно

  if (!new.target) {
    //для тих випадків коли конструктор викликають без new (не заіжди бажано робити таку перевірку бо з new код легше читається)
    return new User(name, age);
  }

  this.name = name;
  this.age = age;

  if (sayHiToMe) {
    //конструктор може створювати методи у об'єкті
    this.sayHiToMe = function () {
      console.log(`Hello, ${this.name}!`);
    };
  }

  //return this; неявно
}

let firstUser = new User('Joyboy', 99, true);

console.log(firstUser);

let button = new (function () {
  //для складних об'єктів одразу створюється і викликається конструктор
  this.weight = '300px';
  this.height = '100px';
  this.hover = 'brighter';
  this.onClick = false;
  //...
  //...
  //...
  //...
})();
console.log(button.onClick);

function Car() {
  this.brand = 'Tesla';

  return;
}

let myCar = new Car(); //можна викликати конструктор без дужок якщо немає аргументів
console.log(myCar);
