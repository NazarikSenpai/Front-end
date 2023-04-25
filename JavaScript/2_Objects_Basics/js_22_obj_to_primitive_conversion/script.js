/* eslint-disable no-unused-vars */
"use strict";

/* Правила перетворення */

// let someObj = {};
// console.log(Boolean(someObj)); //об'єкт завжди true

/* Хінти */

// // "string"
// let user = {};
// let objS = {};
// alert(objS);      //При неявному перетворенні
// user[objS] = 152; //При використанні об'єкта в якості ключа

// // "number"
// let numberOfObj = Number(objS); //При явному перетворенні
// let age = +user;                //При унарному плюсі
// let difference = objS - user;   //При різниці
// let isBigger = objS > user;     //При порівнюванні

// // "default"(зазвичай в проєктах не відрізняється від хінта "number")
// let sumOfObj = user + objS;     //При використанні бінарного плюса
// let isEqualToOne = (user == 1); //При порівнянні через подвійне дорівнює

/* Symbol.toPrimitive */

// let user = {
//   name: "John",
//   age: 32,
//   sex: "male",
// };

// user[Symbol.toPrimitive] = function (hint) {//Метод записаний під символьним ключем для опису правил перетворення об'єкту в примітиви
//   if (hint == "string") {
//     return this.name;
//   } else {    //тут ми не перевіряємо ще раз на дефолт або намбер бо зазвичай ці два хінти об'єднюють в один
//     return this.age;
//   }
// };

// console.log("hint \"string\":", String(user));
// console.log("hint \"number\":", +user);
// console.log("hint \"default\":", user + 100);

/* .toString() та .valueOf() */

let user = {
  name: "John",
  age: 32,
  sex: "male",
  money: 300000,

  toString() {
    return this.name;
  },
  valueOf() {
    return this.money;
  },
};

console.log(String(user));//автоматично викликається .toString()
console.log(user.valueOf() === user);//valueOf повертає сам об'єкт по дефолту

console.log(user + 300);//викликається valueOf

let car = {
  brand: "Mercedes",
  price: 60000,
  maxSpeed: 450,

  toString() {//Якщо описаний тільки toString то при будь-якому претворенні буде використовуватись тільки він
    return this.price;//Перетворення може вернути будь-який примітив і навіть об'єкт якщо це toString valueOf
  }
};

console.log(car + 400);//Mercedes400
console.log(String(car));