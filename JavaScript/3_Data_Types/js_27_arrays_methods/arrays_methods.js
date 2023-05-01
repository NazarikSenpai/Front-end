/* eslint-disable no-unused-vars */
"use strict";

/* splice */

/* let hiArr = ["Hello", "!", "My", "name", "is", "Nazariy"];
let arr = hiArr.slice();// копіювання масиву

console.log(arr);

console.log(hiArr[1]);

delete hiArr[1];//Видаляє значення по ключу, підходить для об'єктів, але для масивів не дуже
console.log(hiArr[1]);
console.log(hiArr);

console.log("splice:", arr.splice(0, 2, "Hi!"));//Видаляємо і замінюємо перші два елементи
console.log(arr);

arr.splice(-1, 0, "Klymenko");//Не видаляємо, а просто вставляємо елементи в масив в потрібне місце. Також дозволені від'ємні індекси
console.log(arr); */

/* slice */

/* let arr = ["Test", "QA", "Bug", "Report", "Butterfly"];

console.log(arr.slice(-3));//не міняє сам масив, а тільки повертає значення
console.log(arr.slice(1, 4)); */

/* concat */

/* let arr = ["Test", "QA", "Bug", "Report", "Butterfly"];
let hiArr = ["Hello", "!", "My", "name", "is", "Nazariy"];

let arrSum = arr.concat(hiArr);
console.log(arrSum);

let arrObject = {
  0: "zero",
  1: "one",
  2: "two",
  length: 3,
  [Symbol.isConcatSpreadable]:true,//Властивість для того щоб об'єкт схожий на масив копіювався через конкат метод
};

let concatedArrObject = arr.concat(arrObject);//наглядний приклад використання конкат з об'єктом
console.log(concatedArrObject); */

/* forEach */

/* let arr = ["Test", "QA", "Bug", "Report", "Butterfly"];
let hiArr = ["Hello", "!", "My", "name", "is", "Nazariy"];
let arrSum = arr.concat(hiArr);

hiArr.forEach(console.log);

arr.forEach((value, index, array) => {
  console.log(`value: ${value}, index: ${index}, array: ${array.join(" | ")}`);
});//Перебирає елементи масиву і нічого не повертає */

