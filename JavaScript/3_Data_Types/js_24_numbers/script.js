/* eslint-disable no-unused-vars */
/* eslint-disable use-isnan */
/* eslint-disable no-compare-neg-zero */
/* eslint-disable no-loss-of-precision */
'use strict';

/* Способи запису числа */

/* let galactics = 2e20;
console.log(galactics);

let miliSecond = 200e-3;
console.log(miliSecond); */

/* Різні системи числення */

/* let color = 0xfff;
console.log(color);

let binary = 0b10011000;
console.log(binary);

let octal = 0o377;
console.log(octal); */

/* toString(base) */

/* let num = 8042;
console.log(num.toString(2));
console.log(num.toString(16));
console.log(num.toString(8));

console.log(12309823342834823543..toString(36));//дві точки тому що після першої йде десятична частина */

/* Округлення */

/* let dotNum = 23.45;

console.log(Math.floor(dotNum));//до меншого
console.log(Math.floor(-1.1));//до меншого

console.log(Math.ceil(dotNum));//до більшого
console.log(Math.ceil(-1.21));//до більшого

console.log(Math.round(dotNum));//звичайне математичне округлення
console.log(Math.round(-1.5));//звичайне математичне округлення

console.log(Math.trunc(dotNum));//відкидання частини після крапки

console.log(dotNum.toFixed(5));//додає нулі якщо цифр після точки менше */

/* Неточні обчислення */

/* console.log(0.1 + 0.2 == 0.3);
console.log(+(0.1+0.2).toFixed(1) == +(0.3).toFixed(1));
console.log(0.1 + 0.2);//0.30000000000000004
console.log(2e700);//infinity

console.log(999999999999999999);//число не помістилось в 52 біт
console.log(-0 == 0); */

/* isFinite and isNaN */

/* console.log(isNaN("string"));//перевірка на NaN
console.log(isNaN(NaN));
console.log(NaN == NaN);//NaN нічому не дорівнює, навіть самому собі
// console.log(Number("blabla"));

console.log("1", isFinite("24"));//перевірка на нескінченність і число
console.log("2", isFinite(24));
console.log("3", isFinite("stroka"));
console.log("4", isFinite(Infinity));
console.log("5", isFinite(""));//пуста строка перетворюється на 0

let inputNum = 123;
console.log(isFinite(inputNum));//перевірка чи число у змінній

console.log("x", isFinite("123"));
console.log("xx", Number.isFinite("123"));//спочатку перевіряється тип даних number
console.log("x", isNaN("string"));
console.log("xx", Number.isNaN("string"));//спочатку перевіряється тип даних number

console.log("object is", Object.is(NaN, NaN));//точне порівняння двух значень
console.log("object is", Object.is(0, -0)); */

/* parseInt and parseFloat */

/* console.log(parseInt("43.9"));//читає строку до першої помилки і повертає ціле число

console.log(parseInt("100110000101010", 2));//можна міняти систему числення

console.log(parseFloat("45.8"));//повертає число з плаваючою точкою */

/* Інщі математичні методи */

/* console.log(Math.max(Math.random(), Math.random(), Math.random(), Math.random(), Math.random()));
console.log(Math.min(Math.random(), Math.random(), Math.random(), Math.random(), Math.random()));

console.log(Math.pow(4,6)); */

/* Task */

/* let inputNumbers = {
  firstNum: 0,
  secondNum: 0,
  numberPrompt,
};
inputNumbers.numberPrompt();
alert(`Сума ваших чисел: ${objSum(inputNumbers)}`); */

alert(`Число: ${readNumber()}`);

function numberPrompt() {
  this['firstNum'] = +prompt('Введіть перше число:');
  this['secondNum'] = +prompt('Введіть друге число:');
  return this;
}

function objSum(obj) {
  return obj.firstNum + obj.secondNum;
}

function readNumber() {
  let inputNumber;

  do {
    inputNumber = prompt('Введіть число:');
  } while (!isFinite(inputNumber));

  if (inputNumber === null || inputNumber === '') {
    return null;
  }

  return inputNumber;
}
