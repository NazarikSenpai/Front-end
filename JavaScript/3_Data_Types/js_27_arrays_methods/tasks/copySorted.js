'use strict';

let arr = ['HTML', 'JavaScript', 'CSS'];
console.log(arr);
console.log(copySorted(arr));
console.log(arr);

function copySorted(arr) {
  return arr.slice().sort();
}

// function copySorted(arr) {
//   let sortedArr = arr.map(value => value);
//   return sortedArr.sort((str1, str2) => str1.localeCompare(str2));//моє вирішення з тимчасовим масивом
//}
