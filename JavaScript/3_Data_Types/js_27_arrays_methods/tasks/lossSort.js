'use strict';

let arr = [];
fillRandom(arr);

console.log(arr);
console.log(arr.sort((a, b) => b - a));

function fillRandom(arr) {
  for (let index = 0; index < 20; index++) {
    arr[index] = Math.floor(Math.random() * 101);
  }
}
