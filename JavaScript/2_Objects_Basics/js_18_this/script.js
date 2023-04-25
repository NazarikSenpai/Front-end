"use strict";
let user = {
  name: "Nazariy",
  age: 19,
  gender: "male",
  sayBye() {//method shorthand
    console.log("Bye!");
  },
  getName() {
    return this.name;
  },
  getGender() {
    let arrowReturn = () => { return this.gender; }; // тут стрілочна функція не має свого this, вона бере його із getGender
    return arrowReturn;
  }
};

let animal = {
  name: "Arrwida",
  age: 7,
};

// user.sayHi = function() {
//   console.log("Hello world!");
// }

function sayHello() {
  console.log("Hello world!");
}

function getAge() {
  return this.name;
}

user.getAge = getAge;
animal.getAge = getAge;
console.log(user.getAge());
console.log(animal.getAge());


user.sayHello = sayHello;

user.sayHello();
user.sayBye();
console.log(user.getName());

let admin = user;
//user.name = "Tamara";
user = null;//deleted object ref in user, but not the object
console.log(admin.getName());
//console.log(getAge());//return undefined or error

let arrowFoo = () => {//приклад того що стрілочна функція бере this ззовні
  console.log(this);
};
arrowFoo();