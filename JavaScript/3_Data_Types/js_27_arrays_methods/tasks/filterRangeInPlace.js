"use strict";

let testArr = [];

for (let index = 0; index < 20; index++) {
  testArr[index] = Math.floor((Math.random() * 101));
}

console.log(testArr);
filterRangeInPlace(testArr, 10, 40);
console.log(testArr);

// function filterRangeInPlace(arr, a, b) {
//   for (let index = 0; index < arr.length; index++) {
//     if (arr[index] < a || arr[index] > b) {
//       arr.splice(index, 1);
//       index--;//бо масив ссувається на один елемент вліво
//     }
//   }
// }
function filterRangeInPlace(arr, a, b) {
  for (let index = arr.length; index >= 0; index--) {//змінив порядок на справа наліво і вийшло на одну строку менше
    if (arr[index] < a || arr[index] > b) {
      arr.splice(index, 1);
    }
  }
}