'use strict';

let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

let arr = [vasya, petya, masha];

sortByAge(arr);
console.log(arr);

function sortByAge(arr) {
  return arr.sort((user1, user2) => user2.age - user1.age);
}
