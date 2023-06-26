'use strict';
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
  showStep: function () {
    // показує поточний крок
    console.log(this.step);
    return this;
  },
};

ladder.up().down().down().down().down().showStep();
