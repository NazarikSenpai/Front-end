'use strict';

console.log('innocent rabbit');
console.log(checkSpam('innocent rabbit'));

//Моє рішення:
// function checkSpam(str) {
//   str = str.toLowerCase();
//   if (str.includes("viagra") || str.includes("xxx")) {
//     return true;
//   }
//   return false;
// }

function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
