"use strict";

let styles = ["Jazz", "Bluz"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

changeInMiddle(styles, "Classic");
console.log(styles);

console.log(styles.shift());

styles.unshift("Rap", "Reggy");
console.log(styles);

function changeInMiddle(arr,word) {
  arr[Math.floor(arr.length / 2)] = word;
}