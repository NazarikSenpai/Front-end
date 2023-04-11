"use strict"
let firstName;
let lastName = null;
let nickname;

console.log(firstName ?? lastName ?? nickname);

let height = 20;
let width = 10;
console.log((height ?? 100) * (width ?? 50));
console.log(height ?? 100);
