"use strict";
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показує поточний крок
    alert(this.step);
    return this;
  }
};

this