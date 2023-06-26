'use strict';

let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

let users = [vasya, petya, masha];

let names = getNames(users);
console.log(names);

let mapped = mapUsers(users);
console.log(mapped);

function mapUsers(arr) {
  return arr.map((item) => ({
    //тут дві дужки для того щоб фігурні дужки сприймались як початок об'єкту а не початок тіла функції
    fullName: `${item.name} ${item.surname}`,
    id: item.id,
  }));
}

// function mapUsers(arr) {//моє перше рішення
//   return arr.map(item => {
//     item.fullName = item.name + " " + item.surname;
//     delete item.name;
//     delete item.surname;
//     return item;
//   });
// }

function getNames(arr) {
  return arr.map((item) => item.name);
}
