/* eslint-disable no-unused-vars */
// "use strict";
// let user = {
//   name: "Nazariy",
// };
// // user = "blablabla";//garbage collector deleted object
// // console.log(user.name);

// let clone = user;
// user = "blablabla";//garbage collector did not delete object
// console.log(clone);

let family = marry({ name: "Nazariy" }, { name: "Nika" });

delete family.father;
delete family.mother.husbamd;//deleted husband frspite the fasct that father.wife refers to woman
console.log(family.father);
family = null;//ALL family was deleted


function marry(man, woman) {
  man.wife = woman;
  woman.husband = man;
  return {
    father: man,
    mother: woman,
  };
}