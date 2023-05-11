"use strict";

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));

function aclean(arr) {
  let uniques = new Map();
  
  for (let str of arr) {//дивний варіант з рішення, бо можна мап замінити об'єктом
    uniques.set(str.toLowerCase().split("").sort().join(""), str);
  }

  return Array.from(uniques.values());

  /* let standartize = arr.map(str => str.toLowerCase().split("").sort().join(""));
  let uniques = new Set(standartize);

  let uniqueArr = [];
  uniques.forEach(str => uniqueArr.push(arr[standartize.indexOf(str)]));

  return uniqueArr; */
}