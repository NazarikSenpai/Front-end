'use strict';

let users = [
  { id: 'john', name: 'John Smith', age: 20 },
  { id: 'ann', name: 'Ann Smith', age: 24 },
  { id: 'pete', name: 'Pete Peterson', age: 31 },
];

let usersById = groupById(users);
console.log(usersById);

function groupById(users) {
  return users.reduce((usersById, user) => {
    usersById[user.id] = user;
    return usersById;
  }, {});

  /* let usersById = {}; //моє перше рішення

  users.forEach(user => { usersById[user.id] = user; });

  return usersById; */
}
