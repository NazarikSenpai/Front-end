/* eslint-disable no-unused-vars */
'use strict';

let testArr = [];

for (let i = 0; i < 40; i++) {
  testArr[i] = Math.trunc(Math.random() * 100);
}

/* Оголошення */

/* let emptyArrayObject = new Array();
let arrayLiteral = ["apple",
  "grapefruit",
  "melon",
  "cherry",
  "pear",//висяча кома може бути і у масивах
];

let randomValues = [true,     //масив може зберігати що завгодно
  false,
  { brand: "Mitsubishi" },
  Symbol.for("id"),
  345,
  "Kavabanga!",
  function () { console.log("blablabla"); },
];

console.log(arrayLiteral[3]);
console.log(arrayLiteral);

arrayLiteral[5] = "pineapple";
console.log(arrayLiteral);

arrayLiteral[0] = "orange";
console.log(arrayLiteral);

console.log("arrayLiteral length is", arrayLiteral.length);

randomValues[randomValues.length - 1]();//виклик функції з масиву */

/* Отримання останніх елементів за допомогою at */

/* let arrayOfNums = [123123, 34243, 534, 675476456, 23423, 11];

let lastElementOfArray = arrayOfNums.at(-1);//тут працює так само як зі строками
console.log(lastElementOfArray); */

/* Методи pop/push shift/unshift */

/* let fruitsInBasket = ["apple",
  "grapefruit",
  "melon",
  "cherry",
  "pear",
];

console.log(fruitsInBasket);
console.log(fruitsInBasket.pop());//повертає останній елемент і видаляє його
console.log(fruitsInBasket);
console.log(fruitsInBasket.push("grape", "lemon", "coconut"));//добавляє нові елементи в кінець і повертає нову довжину
console.log(fruitsInBasket);
console.log(fruitsInBasket.shift());//те саме що і поп тільки для початку масива
console.log(fruitsInBasket);
console.log(fruitsInBasket.unshift("banana"));//те саме що і пуш тільки для початку масива */

/* Внутрішня властивість масива */

/* let aarrr = ["ginga", "armada"];

let cloneAarrr = aarrr;

console.log(cloneAarrr);
aarrr.push("rasteira");//масив це об'єкт і веде себе як об'єкт
console.log(cloneAarrr);

cloneAarrr.force = 9000;//КАКА
console.log(cloneAarrr.force);

cloneAarrr[9999] = "queshada";//КАКА
console.log(cloneAarrr[9999]); */

/* Ефективність */

/* let nums = [];
for (let index = 0; index < 100; index++) {
  nums[index] = Math.trunc(Math.random() * 101);
}
console.log(nums);

console.log(nums.unshift(123));//працює довше ніж pop/push
console.log(nums.push(123)); */

/* Перебор елементів */

/* let randArr = [];
for (let index = 0; index < 10; index++) {
  randArr[index] = Math.trunc(Math.random() * 10000);
}

console.log(randArr);

for (let iterator of randArr) {
  console.log(iterator+1);
}

for (let key in randArr) {//так краще не робити бо деякі браузери використовують псевдомасиви в яких є інші властивості
  console.log(`${key}:`, randArr[key]);
}// а ще цей цикл в 10-100 разів повільніше ніж forof */

/* Трохи про length */

/* console.log("length:", testArr.length);// length = lastIndex + 1

console.log(testArr);

testArr.length = 30;

console.log(testArr);

testArr.length = 40;

console.log(testArr);

testArr.length = 0;//найпростіший спосіб очистити масив
console.log(testArr); */

/* new Array() */

/* let formulaOneTeams = new Array("Ferrari", "RedBull", "Mercedes");

console.log(formulaOneTeams);

let numbers = new Array(10);//один аргумент задає довжину масиву
console.log(numbers[0]);
console.log(numbers.length); */

/* Багатовимірні масиви */

/* let chessTable = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
]; */

/* toString */

/* let testArrString = String(testArr);//у масива є тільки метод toString
console.log(testArrString);

console.log("blablabla" + testArr);
console.log(123123 + testArr); */

/* Порівняння масивів */

/* console.log([] === []);//порівнюється так само як і об'єкт, тобто по посиланню
console.log([] == []);
console.log([1, 2, 3] == [1, 2, 3]);
console.log([0] == 0);//при порівнянні з примітивом використовується toString */
