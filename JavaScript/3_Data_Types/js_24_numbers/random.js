/* eslint-disable no-unused-vars */
"use strict";

function random(min,max) {
  let result;
  do {
    result = Math.random() * max;
  } while (result < min || result > max);
  return result;
}

function random2(min,max) {
  return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
  return Math.trunc(min + Math.random() * (max - min));
}

console.log(randomInteger(3, 300));

console.log(random2(3, 5));