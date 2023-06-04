'use strict';

let obj = {
  name: 'Nazariy',
  age: 20,
  gender: 'male',
  address: {
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
  },
  phone: '555-555-5555',
  email: 'kenaa@example.com',
  password: 'password',
  role: 'admin',
  [Symbol('isOnline')]: true,
  [Symbol('isRunning')]: true,
};

console.log(Object.values(obj));
console.log(Object.keys(obj));
console.log(Object.entries(obj));

console.log(Object.getOwnPropertySymbols(obj)); //повертає всі ключі символи
console.log(Reflect.ownKeys(obj)); // повертає усі ключі

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let doublePrices = Object.fromEntries(
  Object.entries(prices).map((entry) => [entry[0], entry[1] * 2])
);

console.log(doublePrices);