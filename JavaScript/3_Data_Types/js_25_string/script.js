/* eslint-disable no-unused-vars */
"use strict";

/* Лапки */

// let guestList = `Guests:
// Lana,
// Zoe,
// Zoro,
// Sanji`;//зворотні лапки можуть зберігати декілька строк

// console.log(guestList);

// У цьому коді виникне помилка, бо таке працює тільки з backquotes
// let guestListInDoubleQuotes = "Guests:
// *Lana,
// *Zoe,
// Zoro,
//   Sanji";

/* Спецсимволи */

let doubleGreet = "Hello, my friend!\n\tNice to meet you!" ;
let backGreet = 
`Hello, my friend!
\tNice to meet you!`;
//console.log(doubleGreet);  
//console.log(doubleGreet==backGreet);


/* Довжина строки */

//console.log(backGreet.length);//length, це властивість а не функція

/* Доступ до символів */

// console.log(doubleGreet.at(19));//повертає значення символу по індексу
// console.log(doubleGreet.at(-21));
// console.log(backGreet[19]);
// console.log(backGreet[-21]);//в квадратних дужках це буде undfined

// // for (const char of doubleGreet) {
// //   console.log(char);
// // }


// for (let tab = " ", index = 0; index < doubleGreet.length; index++) {
//   console.log(tab + doubleGreet[index]);
//   tab += " ";
// }

/* Строки незмінні */

// doubleGreet[0] = "!";// ERROR
//console.log(doubleGreet[0]);

doubleGreet = "!-!" + doubleGreet.substring(1, doubleGreet.length);
//console.log(doubleGreet);

/* Зміна регістру */

// console.log(doubleGreet.toUpperCase());
// console.log(doubleGreet.toLowerCase());

// console.log("Big letter:", doubleGreet[6].toUpperCase());

/* Пошук субстроки */

// console.log(doubleGreet.indexOf("friend"));//знаходить першу згадку цієї субстроки у строці
// console.log(doubleGreet.indexOf("e", 4));

// let positions = "";
// let target = "e";
// let targetPos = -1;

// while ((targetPos = doubleGreet.indexOf(target, ++targetPos)) != -1) {
//   positions += `${targetPos} `;
// }

// console.log(positions);

/* Побітове НЕ */

// //Використовується тільки в старому коді
// while (~(targetPos = doubleGreet.indexOf(target, ++targetPos))) {//~n = -(n+1)    ~(-1) = 0 
//   positions += `${targetPos} `;
// }

/* includes, startsWith, endsWith */

// console.log(doubleGreet.includes("ee", 3));
// console.log(doubleGreet.startsWith("ello", 3));
// console.log(doubleGreet.indexOf("you!"));
// console.log(doubleGreet.endsWith("you", doubleGreet.length -1));

/* Отримання підстроки */

// console.log(backGreet.slice(4, 30));// включно зі старт до енд

// console.log(backGreet.slice(10));

// console.log(backGreet.slice(-10, -3));

// console.log(backGreet.substring(3, 20));//однакове значення що тут
// console.log(backGreet.substring(20, 3));//що тут
// console.log("substring- :", backGreet.substring(-10, -1));//якщо менше нуля то сприймається як нуль

// console.log(backGreet.substr(5, 10));//тільки для баузерів (start,length)
// console.log("WITHOUT LENGTH:",backGreet.substr(5));

/* Порівняння строк */

console.log("a" > "Z");
console.log("Ö" > "Z");

console.log("Ö".codePointAt(0));
console.log("Z".codePointAt(0));
console.log("z".codePointAt(0));
console.log("a".codePointAt(0));

console.log(String.fromCharCode(122));

let stringOfChars = "";
for (let index = 65, counter = 0; index <= 220; index++) {
  stringOfChars += String.fromCharCode(index) + "  ";
  counter++;

  if (counter % 10 == 0) {
    stringOfChars += "\n";
  }
}
console.log(stringOfChars);

/* Правильне порівняння строк */

console.log("X".localeCompare("Х", "uk", { sensitivity: "base" }));//(compareString[, locales[, options]])

/* repeat */

let char = "Char";
console.log("repeat(0):", char.repeat(0));
console.log("repeat(10):", char.repeat(10));
// console.log("repeat(-1):", char.repeat(-1));//Invalid count value
