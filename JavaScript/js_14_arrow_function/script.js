"use strict"
// let summ = (firstNumber, secondNumber) => firstNumber + secondNumber;

// console.log(summ(23, 32));

// let age = 23;
// let welcome = (age < 18) ? () => alert("Hi!") : () => alert("Good afternoon!");

// welcome();

//Task:
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );
let ask = (question, yes, no) => {
    return confirm(question) ? yes() : no();
};

ask(
    "Are you agree?",
    () => alert("You agreed"),      //lol, this works =D
    () => alert("You desagreed")
)

console.log('Hi there');
