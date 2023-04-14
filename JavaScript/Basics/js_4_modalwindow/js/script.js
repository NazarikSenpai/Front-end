/* eslint-disable no-unused-vars */
"use strict";
alert("Hello!");
let name = prompt("Say your name, please.", "User");
let buyNewHouse = confirm(`${name}, do you want to buy a new house for $300 000?`);
let userCardNumber;
if (buyNewHouse == true) {
  userCardNumber = prompt("Write down your card number:", 1234123412341234);
  alert("Thank you for buying:)");
}
