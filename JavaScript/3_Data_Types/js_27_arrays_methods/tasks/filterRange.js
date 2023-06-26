/* eslint-disable no-unused-vars */
'use strict';

let testArr = [];

for (let index = 0; index < 20; index++) {
  testArr[index] = Math.floor(Math.random() * 101);
}

console.log(testArr);
console.log(filterRange(testArr, 0, 100));

function filterRange(arr, a, b) {
  return arr.filter((value) => value >= a && value <= b);
  // return arr.filter(value => value >= a && value <= b ? true : false); //мій перший варіант з тернарним оператором
}
