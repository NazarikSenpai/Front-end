"use strict";

function power(x,n) {
  let result = 1;
  for (let index = 0; index < n; index++) {
    result *= x;
  }
  return result;
}

console.log( power(12,1) );