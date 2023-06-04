'use strict';

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function salariesSum(salaries) {
  return Object.values(salaries).reduce((sum, salary) => sum + salary, 0);
}

function count(obj) {
  return Object.keys(obj).length;
}

console.log(salariesSum(salaries));

console.log(count(salaries));