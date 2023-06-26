/* eslint-disable no-unused-vars */
'use strict';

/* Symbol.iterator */

/* let range = {
  from: 0,
  to: 30,

  [Symbol.iterator]: function () {
    let current = this.from;
    let to = this.to;

    return {
      current,
      to,

      next() {
        if (this.current <= this.to) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }

    };
  }

};

for (const iterator of range) {
  console.log(iterator);
} */

/* Строки це ітеративні об'єкти */

/* let greeting = "Hello my friend";
for (let char of greeting) {
  console.log(char);
} */

/* Явний виклик ітератора */

/* let greeting = "Hello my friend";

let iterator = greeting[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  console.log(result.value);
} */

/* Array.from */

/* let range = {
  from: 0,
  to: 30,

  [Symbol.iterator]: function () {
    let current = this.from;
    let to = this.to;

    return {
      current,
      to,

      next() {
        if (this.current <= this.to) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }

    };
  }

};

let arrayLikeObj = {
  0: "H",
  1: "e",
  2: "l",
  3: "l",
  length: 4,
};

console.log(Array.from(range));
console.log(Array.from(arrayLikeObj));
console.log(Array.from("Hell")); */
