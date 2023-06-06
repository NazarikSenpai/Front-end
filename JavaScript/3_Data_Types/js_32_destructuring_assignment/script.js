'use strict';

/* destructuring array */

/* let user = new Set(['Nazariy', 'Oleksandrovych', 'Klymenko']);//можна використовувати будь-який ітерований об'єкт

let [firstName, , lastName] = user;//пустий елемент зліва пропускає елемент в масиві

console.log(firstName);
console.log(lastName);

let newUser = {};

[newUser.firstName, newUser.lastName] = user;

console.log(newUser);

let absoluteNewUser = {
  name: 'John',
  age: 30,
};

for (let [key, value] of Object.entries(absoluteNewUser)) {
  console.log(key, value);
}

let admin = "Pasha";
let currentUser = "John";

[admin, currentUser] = [currentUser, admin];
console.log(admin);
console.log(currentUser); */

/* rest and default parameters */

let [firstThing, secondThing, ...rest] = "Hello, my friends. Nice to meet you".split(" ");

console.log(firstThing);
console.log(secondThing);
console.log(rest);

let [name = "name", surname = "surname"] = ["Nazariy"];
console.log(name);
console.log(surname);