'use strict';

let sum = sumInput();
alert(sum);

function sumInput() {
  let resultArr = [];
  let result = 0;
  let inputNum = prompt('Введіть число:', '');

  while (isFinite(inputNum) && !!inputNum) {
    resultArr.push(+inputNum);
    inputNum = prompt('Введіть число:', '');
  }

  for (let num of resultArr) {
    result += num;
  }

  return result;
}
