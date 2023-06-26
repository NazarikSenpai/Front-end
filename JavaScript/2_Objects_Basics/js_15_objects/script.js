/* eslint-disable no-unused-vars */
/**
 * @param {Object} salaries
 *
 */
'use strict';
//let user = new Object();  //конструктор об'єкта
let car = {}; //літерал об'єкта

let user = {
  name: 'Nazariy',
  age: 19,
  weight: 75,
  'likes birds': true,
};

//delete user.age;

user['likes spiders'] = true;

let keyword = 'likes spiders';
console.log(`user["likes spiders"] = ${user[keyword]}`);

console.log(`user.name = ${user.name}`);
console.log(`user.age = ${user.age}`);
console.log(`"likes spiders" in user = ${'likes spiders' in user}`);
console.log(`"kefteme" in user = ${'kefteme' in user}`);

user.isAdmin = true;
//console.log(user);

let fruit = 'apple';

let bag = {
  [fruit]: 5,
  [fruit + 'Computers']: 2,
};

console.log(`bag.fruit = ${bag[fruit]}`);
console.log(bag);

function makeUser(name, age) {
  return (user = {
    name,
    age,
  });
}

let userDefault = makeUser('Josephina', 32);
for (let key in userDefault) {
  console.log(key, userDefault[key]);
}
console.log(isEmpty(userDefault));

const testObject = {};
testObject.prop = 10;
console.log(`testObject.prop = ${testObject.prop}`);

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
console.log(sumOfSalaries(salaries));
multiplyNumeric(salaries);
console.log(salaries);

function sumOfSalaries(salariesObj) {
  let summ = 0;
  for (let key in salariesObj) {
    summ += salariesObj[key];
  }
  return summ;
}

/* function multiplyNumeric(object) {
  
  for (let key in object) {

    if (typeof(object[key]) == "number") {
      object[key] *= 2;
    }

  }

} */

function multiplyNumeric(object) {
  for (let key in object) {
    if (object[key] === +object[key]) {
      object[key] *= 2;
    }
  }
}

function isEmpty(object) {
  let numberOfProps = 0;

  for (let prop in object) {
    numberOfProps++;
  }

  return numberOfProps == 0 ? true : false;
}

/* function isEmpty(object) {

  for (let prop in object) {
    return false;
  }

  return true;
} */
