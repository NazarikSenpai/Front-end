'use strict';
//Function expression:
// let sayHi = function(){
//     console.log("Hi, there!");
// };

// let sayHi2 = sayHi;

// alert(sayHi2);

//Function callback:
// function ask(question, yes, no) {    //function declaration
//     if (confirm(question)) { yes(); }
//     else { no(); }
// };

// function showYes() {   //function callback, function expression
//     alert("You said yes");
// };

// let showNo = function () {    //function callback, function expression
//     alert("You said no");
// };

// ask("Do you agree?", showYes, showNo);

//Function expression example
let age = 27;
let welcome;

//Variaton of welcome declaration:
// let welcome = (age < 18) ?
//     function () { alert("Hi!"); } :
//     function () { alert("Hi!"); };

if (age < 18) {
  function welcome() {
    alert('Привет!');
  }
} else {
  function welcome() {
    alert('Здравствуйте!');
  }
}

// if (age < 18) {
//     welcome = function () {
//         alert("Hi!");
//     };
// } else {
//     welcome = function () {
//         alert("Good afternoon!");
//     };
// }

welcome();
