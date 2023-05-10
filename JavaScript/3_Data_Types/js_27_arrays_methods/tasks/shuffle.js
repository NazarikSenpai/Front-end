"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

shuffle(arr);
console.log(arr);

function shuffle(arr) {
  let shuffledArr = [];
  let length = arr.length;

  for (let index = 0; index < length; index++) {
    shuffledArr[index] = arr.splice(Math.floor(Math.random() * (arr.length - 1)), 1)[0];
  }

  shuffledArr.forEach(element => arr.push(element));
  return arr;
}