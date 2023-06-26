/* eslint-disable no-unused-vars */
'use strict';

console.log(ucFirst(''));

function ucFirst(str) {
  return str ? str.at(0).toUpperCase() + str.slice(1) : str;
}
