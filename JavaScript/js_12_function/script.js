/* eslint-disable no-unused-vars */
"use strict";
let today = new Date();
function printToConsole() {
  console.log("Hi, there!");
}

function greetingsText() {
  let curreentHours = today.getHours();
  if (curreentHours >= 6 && curreentHours < 12) {
    return "Good morning";
  } else if (curreentHours >= 12 && curreentHours < 18) {
    return "Good afternoon";
  } else if (curreentHours >= 18 || curreentHours < 6) {
    return "Good night";
  }
}

function greetings(userName = "User", greetsText = greetingsText()) {
  alert(greetsText + userName);
}

function checkAge(age) {
  return (age > 18) ? true : confirm("Did your parents allow it?");
}

function max(firstNum, secondNum) {
  return firstNum > secondNum ? firstNum : secondNum;
}

function min(firstNum, secondNum) {
  return firstNum > secondNum ? secondNum : firstNum;
}

let a = +prompt("Enter a", "");
let b = +prompt("Enter b", "");
alert(`Maximum is ${max(a, b)}`);
alert(`Minimum is ${min(a, b)}`);

greetings("Nika");
greetings();
let Age = +prompt("What is your age?", "");
checkAge(Age);