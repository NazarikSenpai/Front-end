"use strict";
let calculator = {
  firstInputNumber: 0,
  secondInputNumber: 0,
  read() {
    this.firstInputNumber = +prompt("Enter first number:", 0);
    this.secondInputNumber = +prompt("Enter second number:", 0);
  },
  summ() {
    return this.firstInputNumber + this.secondInputNumber;
  },
  multiply() {
    return this.firstInputNumber * this.secondInputNumber;
  },
  askSumm() {
    //if (confirm("Вивести суму двох чисел?")) {
    alert(this.summ());
    //}
  },
  askMultiply() {
    //if (confirm("Вивести добуток двох чисел?")) {
    alert(this.multiply());
    //}
  },
};

calculator.read();
calculator.askSumm();
calculator.askMultiply();