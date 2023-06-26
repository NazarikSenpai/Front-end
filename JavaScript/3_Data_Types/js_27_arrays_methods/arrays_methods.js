/* eslint-disable no-unused-vars */
'use strict';

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

/* indexOf includes */

/* let arr = ["Test", "QA", "Bug", NaN, "Report", "Butterfly", 0, "", false];

console.log(arr.indexOf("QA", 1));
console.log(arr.indexOf("xxx"));//Повертає -1 бо не знаходить
console.log(arr.lastIndexOf(NaN));//повертає -1
console.log(arr.includes(NaN));//includes може знайти NaN на відміну від indexOf
console.log(arr.includes("Butterfly", 3));

console.log(arr.lastIndexOf(false, -5));//ці всі 3 методи використовують строге порівняння === */

/* find findIndex findLastIndex */

/* let users = [
  { id: 1, name: "Jo", lastName: "Jostar" },
  { id: 2, name: "Marla", lastName: "Zinger" },
  { id: 3, name: "Simon", lastName: "Gurren" },
  { id: 4, name: "Kamino", lastName: "Lagann" },
  { id: 1, name: "Jo", lastName: "Jostar" },
];

let currentUser = users.find(item => item.name == "Simon");

console.log(currentUser.id, currentUser.name, currentUser.lastName);

//let currentUserIndex = users.findIndex(user => user.name == "Jo");
let currentUserIndex = users.findLastIndex(user => user.name == "Jo");//прийшлось обновити ноду щоб цей метод запрацював
console.log("currentUserIndex:", currentUserIndex); */

/* filter */

/* let users = [
  { id: 1, name: "Jo", lastName: "Jostar" },
  { id: 2, name: "Marla", lastName: "Zinger" },
  { id: 3, name: "Simon", lastName: "Gurren" },
  { id: 4, name: "Kamino", lastName: "Lagann" },
  { id: 1, name: "Jo", lastName: "Jostar" },
];

let jostarUsers = users.filter(user => user.lastName == "Jostar");//працює схоже з find але шукає всі елементи а не один перший
console.log(jostarUsers); */

/* Перетворення масиву map */

/* let names = ["Jonathan", "Anisim", "Nika", "Nazariy", "Vlad"];

let namesLengths = names.map(name => name.length);//повертає масив результатів виконання функції до кожного елемента в масиві
console.log(namesLengths); */

/* sort(fn) */

/* let numValues = [3, 24, 5, 45, 10, 6, 3, 2];

console.log(numValues.sort());//Сортування відбулося з перетворенням у строку
console.log(numValues);

function numCompare(a, b) {
  if (a < b) return 1;
  if (a == b) return 0;
  if (a > b) return -1;
}

console.log(numValues.sort(numCompare));//тепер сортування відбулося правильно

console.log(numValues.sort((a, b) => {
  console.log(a, " ? ", b);
  return a - b;
}));//більш короткий запис функції порівняння;

let names = ["Jonathan", "Anisim", "Nika", "Nazariy", "Vlad"];
names.sort((a, b) => a.localeCompare(b));//Краще робити так зі строками щоб запобігти помилок зі специфічними буквами
console.log(names);

console.log(names.sort()); */

/* reverse */

/* let numValues = [3, 24, 5, 45, 10, 6, 3, 2];
numValues.sort((a, b) => a - b);
console.log(numValues);

console.log(numValues.reverse());//розвертає масив елементів в зворотньому порядку

console.log(numValues); */

/* split та join */

/* let namesInput = "Alex, Olga, Vadim, Olexandr, Stepan";
let namesArr = namesInput.split(", ", 3);
console.log("namesArr:", namesArr);

let namesLetters = namesInput.split("");
console.log("namesLetters:", namesLetters);

let users = ["Jonathan", "Anisim", "Nika", "Nazariy", "Vlad"];
let userNames = users.join(" | ");
console.log("userNames:", userNames); */

/* reduse та reduseRight */

/* let users = ["Jonathan", "Anisim", "Nika", "Nazariy", "Vlad"];

let longNamesCount = users.reduceRight((count, name) => count + (name.length > 4 ? 1 : 0), 0);//до кожного елементу викликає функ, акумулятор берется з інітіал(якщо не заданий, то береться перший елемент масиву) або з результату роботи минулої функ. reduseRight проходиться справа наліво
console.log(longNamesCount);

let emptyArr = [];
//console.log(emptyArr.reduce((accum, item) => accum + item));//видає помилку бо масив пустий і інітіал не заданий TypeError: Reduce of empty array with no initial value */

/* Array.isArray */

/* console.log(typeof []);

console.log(Array.isArray([]));//повертає true якщо value це масив
console.log(Array.isArray({})); */

/* thisArg */

/* let appleCompany = {
  minAge: 18,
  maxAge: 99,
  degree: "Bachelor",
  canJoin(employee) {
    return employee.degree == this.degree && employee.age <= this.maxAge && employee.age >= this.minAge;
  },
};

let candidates = [
  { name: "JoJo", age: 30, degree: "Basic" },
  { name: "Cris", age: 17, degree: "Bachelor" },
  { name: "Anna", age: 100, degree: "Bachelor" },
  { name: "Matthew", age: 27, degree: "Bachelor" },
  { name: "Gorge", age: 30, degree: "Bachelor" },
];

console.log(candidates.filter(appleCompany.canJoin, appleCompany));//thisArg тут для того щоб ключове слово this правильно викликалося і не видавало undefined

let someArr = new Array(10);
someArr.fill("bla");//заповнює масив однаковими елементами
console.log(someArr); */
