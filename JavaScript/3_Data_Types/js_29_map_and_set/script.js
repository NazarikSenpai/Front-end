/* eslint-disable no-unused-vars */
'use strict';

/* Map */

/* let user = new Map();

user.set("name", "John")//set повертає сам об'єкт тому можна робити ланцюжок викликів
  .set(30, 30)
  .set("gender", "male")
  .set(NaN, "not a number");//ТАК!!! НаН теж може використовуватись як ключ

console.log(user.get(30));

console.log(user);
console.log(user.get("name"));

user.delete("gender");
console.log(user.has("gender"));//видалення гендеру і перевірка існування ключу
console.log(user.size);


//user.clear();
//console.log(user);

user["hasPet"] = true;//так краще не робити
console.log(user); */

/* Перебір */

/* user.set("name", "John")
  .set(30, 30)
  .set("gender", "male")
  .set(NaN, "not a number");

for (let prop of user.keys()) {//перебор по ключам
  console.log(prop, " - ", user.get(prop));
}


for (let userProp of user.values()) {//перебор по значенням
  console.log(userProp);
}

for (let entry of user.entries()) {//повертає масив з ключем та значенням. Виклкається за замовчуванням
  console.log(entry);
}

user.forEach((prop, key) => console.log(prop, " = ", key));//працює так само як в масиві */

/* Map з Object */

// let car = new Map([
//   ["brand", "Mitsubishi"],
//   [32, 33],
//   [33, 34],
//   [true, "isn`t broken"]
// ]);

// console.log(car.get(true));

// let carObj = {
//   brand: "Ferrari",
//   year: 2020,
//   maxSpeed: 450,
// };

// let carMap = new Map(Object.entries(carObj));
// console.log(carMap);
// console.log(Object.entries(carObj));

// /* Object з Map */

// let myCar = Object.fromEntries(car);//тут .entries не обов'язкове, тому можна просто car
// console.log(myCar);

// let shoppingCart = Object.fromEntries([//приймає перебираємий об'єкт не обов'язково масив
//   ["butter", 3],
//   ["apple", 10],
//   ["shampoo", 1],
// ]);
// console.log(shoppingCart);

/* Set */

let cars = new Set();

let hisCar = {
  brand: 'Mitsubishi',
  year: 2003,
};

let myCar = {
  brand: 'Renault',
  year: 2013,
};

let herCar = {
  brand: 'Subaru',
  year: 2017,
};

cars.add(hisCar);
cars.add(hisCar);
cars.add(hisCar);
cars.add(herCar);
cars.add(hisCar);

console.log(cars);

cars.forEach((value) => console.log(value));
for (let key of cars) {
  console.log('car: ', key);
}
