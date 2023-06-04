'use strict';

let values = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
];

console.log(unique(values));

function unique(arr) {
  return Array.from(new Set(arr)); //більш лаконічний варіант з рішення

  /* let uniques = new Set();
  arr.forEach(value => {
    uniques.add(value);
  });

  return [...uniques]; */
}
