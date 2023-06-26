'use strict'; //через це остання задача буде видавати помилку

/* Примітиви як об'єкти */

let user = {
  name: 'Пилип',
  money: 2345.56,
  sayHi() {
    console.log(this.name.toUpperCase().repeat(10));
  },
};

user.sayHi();

console.log(user.money.toFixed(1));

console.log(typeof 123);
console.log(typeof new Number(123)); //явне використання конструктора об'єкта-обгортки НЕ РЕКОМЕНДОВАНО

// console.log(null.toUppercase());//
// console.log(undefined.toUppercase());//у null і undefined немає методів

// let userName = "Polina";
// userName.age = 42;
// console.log(userName.age = 42,userName.age == 4);
