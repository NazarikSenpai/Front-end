/* eslint-disable no-unused-vars */
'use strict';
function Calculator() {
  this.firstNumber = 0;
  this.secondNumber = 0;

  this.read = function () {
    this.firstNumber = +prompt('Enter first number:', 0);
    this.secondNumber = +prompt('Enter second number:', 0);
  };

  this.sum = function () {
    return this.firstNumber + this.secondNumber;
  };

  this.mul = function () {
    return this.firstNumber * this.secondNumber;
  };
}
