/* eslint-disable no-unused-vars */
'use strict';

/* Символи */

// let symbol1 = Symbol("id");//id це просто опис(ім'я) який не має ніякого значення
// let symbol2 = Symbol("id");
// console.log(symbol1 == symbol2);
// //alert(symbol1); - Cannot convert a Symbol value to a string

// console.log(toString(symbol1));
// console.log(symbol1.description);

/* Приховані властивості */

// let user = {
//   name:"Vitaliy",
// };

// let id = Symbol("id");

// user[id] = 42;
// console.log(user[id]);//ми можемо отримати доступ до даних, використовуючи символ як ключ

// let name = Symbol("name");//інша програма може створити свій ідентифікатор і він ніяк не повпливає на наш об'єкт
// user[name] = "their identificator";
// console.log(user[name]);
// console.log(user.name);//властивість залишилась тією ж самою

/* Символи в літералі об'єкта */

// let car = {
//   brand: "BMW",
//   class: "S",
//   [id]: 123321123321,//створили символ всередені літерала об'єкта
// };

/* Символи ігноруються циклом for in */

// let human = {
//   hand: 123,
//   leg: 321,
//   head: 23,
//   [name]: "Nazarii",
// };
// for (const key in human) {
//   console.log(`${key}:`,human[key]);//name не виводиться
// }

// console.log(Object.keys(human));//name також ігнорується

// let humanClone = Object.assign(human);//а тут символ скопіювався тому що у цьому суть методу assign
// console.log(humanClone);

/* Глобальні символи */

// let id = Symbol.for("id");//for шукає символи з іменем name у глобальному регістрі і повертає ТОЙ ЖЕ САМИЙ якщо знахожить
// console.log(id.description);

// let idClone = Symbol.for("id");
// console.log(idClone.description);
// console.log(id === idClone);

/* Symbol.keyFor */

// let symbol1 = Symbol.for("key1");
// let symbol2 = Symbol.for("key2");

// console.log(Symbol.keyFor(symbol1));//keyFor повертає значення глобального символа за його ім'ям
// console.log(Symbol.keyFor(symbol2));

// let globalsym = Symbol.for("xsym");
// let localsym = Symbol("xsym");

// console.log(Symbol.keyFor(globalsym));//працює тільки для глобальних об'єктів
// console.log(Symbol.keyFor(localsym));

/* Системні символи */

let user = {};

let toPrimitive = Symbol.toPrimitive;

user[toPrimitive] = 123;
console.log(user[toPrimitive]);

let car = {
  brand: 'BMW',
  weight: '1000kg',
};
let sym = Symbol.for('id');
car[sym] = 123;
console.log(car[sym]);

let symClone = Symbol.for('id');
console.log(car[symClone]);

console.log(Object.getOwnPropertySymbols(car)); //повертає масив з усіма символами об'єкта
console.log(Reflect.ownKeys(car)); //повертає ВСІ ключі об'єкта
