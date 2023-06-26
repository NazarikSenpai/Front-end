/* eslint-disable no-unused-vars */
'use strict';

// /* Проблема відсутньої властивості */
// let user = {
//   street: "lorem",
//   age: 30,
//   contacts: {
//     phone: {
//       number: 12345667788,
//       countryCode: "+380",
//     },
//   },
// };
// console.log(user.contacts && user.contacts.phoneNumber);//перевірка на існування через логічний оператор "І"

// /* Опціональний ланцюжок */
// console.log(user?.contacts?.phone?.countryCode);
// let value = 42;
// console.log(value?.longitude?.size);//Працює також і з не об'єктами

// /* Скорочене обчислення */
// let properties = null;
// let number = 1;
// function addOne(number){
//   this.number += number;
// }
// properties?.addOne(number++);//Виконання не дійде до функції через опціональний ланцюжок
// console.log(number);

// /* Застосування з методами та квадратними дужками ?.() ?.[] */
// let sportcar = {
//   brand:"Ferrari",
//   sound() {
//     console.log("WRUM-WRUM!!!");
//   },
// };

// let car = {
//   wheels: 4,
// };

// let bicycle = null;

// sportcar.sound?.();
// car.sound?.();

// let key = "brand";

// console.log(sportcar?.[key]);
// console.log(bicycle?.[key]);

/* Свої приклади */

let tripInfo = {
  destination: {
    country: prompt('Введіть країну призначення:'),
  },
};

// tripInfo.destination.country = prompt("Введіть країну призначення:");
// tripInfo.destination.city = prompt("*Введіть місто призначення:");
// tripInfo.departureTime = prompt("*Введіть час відправлення:");
// tripInfo.passangers = prompt("Введіть кількість пасажирів:");

let currentCity = tripInfo.destination?.country;
console.log(currentCity);
