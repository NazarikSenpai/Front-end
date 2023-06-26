/* eslint-disable no-unused-vars */
'use strict';

let calc = new Calculator();
console.log(calc.calculate('32 - 64'));

calc.addMethod('*', (a, b) => a * b);
console.log(calc.calculate('3 * 9'));

function Calculator() {
  this.separators = {
    '+': function (a, b) {
      return a + b;
    },
    '-': function (a, b) {
      return a - b;
    },
  };

  this.calculate = function (str) {
    let inputArr = str.split(' ');

    for (let separator in this.separators) {
      if (inputArr[1] == separator) {
        return this.separators[separator](+inputArr[0], +inputArr[2]);
      }
    }
  };

  this.addMethod = function (name, func) {
    this.separators[name] = func;
  };
}
