/* eslint-disable no-unused-vars */
"use strict";
var _ = require("../../../node_modules/lodash");
// let message = "Hello";
// let phrase = message;
// console.log(phrase);
// message = "Bye";
// console.log(phrase);

// let car = { brand: "Tesla" };
// let rocket = car;
// console.log(rocket.brand);
// car.brand = "Wolkswagen";
// console.log(rocket.brand);
// console.log(car == rocket);
// console.log(car === rocket);

// let car = {
//   brand: "Mitsubishi",
//   canDriveAtNight: false,

// };

// let permissions = {
//   canOpenDoor: true,
//   canOpenTrunk: true,
//   canDriveAtNight: true,
  
// };

// // for (let key in permissions) {
// //   car[key] = permissions[key];
// // }

// Object.assign(car, permissions); //canDriveAtNight reassigned

// console.log("car =", car);

// //let carClone = Object.assign({}, car);
// let carClone = { ...car };
// console.log("carClone =", carClone);

let user = {
  name: "Nazariy",
  age: 19,
  sizes: {
    weight: 50,
    height: 180,
    squares: {
      perimeter: 200,
      area: 10000,
    },
  }
};

let cloneUser = deepClone(user);
console.log(cloneUser);

function deepClone(object) {
  let result = {};

  for (let key in object) {

    if (typeof object[key] === "object") {
      result[key] = deepClone(object[key]);
    } else {
      result[key] = object[key];
    }

  }

  return result;
}