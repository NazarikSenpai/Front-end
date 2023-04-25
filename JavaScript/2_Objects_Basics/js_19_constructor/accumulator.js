"use strict";
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function (value) {
    this.value += (value || +prompt("Enter the value:", 0));
  };
}

let accum = new Accumulator(20);
accum.read();
