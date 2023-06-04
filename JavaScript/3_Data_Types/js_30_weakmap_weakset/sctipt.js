'use strict';

// let obj = { name: "Nazar" };

// let arr = [obj];

// obj = null;

// console.log(arr[0]);//в масиві зберігається об'єкт навіть якщо його обнулити

/* WeakMap */

/* let weakMap = new WeakMap();

let user = { name: "Nazar" };

weakMap.set(user, "notAdmin");

console.log(weakMap.get(user));

user = null;

console.log(weakMap.get(user)); */

/* WeakMap example1 */

/* let userVisitsMap = new WeakMap();

function countVisits(user) {//функція для підрахунку кількості заходів юзера, якщо юзер видаляється то і кількість його входів теж видаляється
   let visits = userVisitsMap.get(user) || 0;
   userVisitsMap.set(user, visits + 1);
} */

/* WeakMap example1 */

/* let cache = new WeakMap();

function objOperation(obj, operation) {//функція для операцій над об'єктом яка кешує результат, коли об'єкт видаляється то і його кеш також видаляється
  if (!cache.has(obj)) {
    let result = operation(obj);

    cache.set(obj, result);
  }

  return cache.get(obj);
} */

/* WeakSet */

/* let visitors = new WeakSet();

let user = { name: "Nika" };

visitors.add(user);//зберігає унікальних відвідувачів сайту */


