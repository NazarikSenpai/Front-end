/* eslint-disable no-unused-vars */
'use strict';
console.log(10 % 4); //оператор остачі

console.log(2 ** 6); //оператор піднесення до степеня
console.log(625 ** (1 / 2));
let root = 21 ** (1 / 3); //2.7589241763811203
console.log(root);

console.log('2' + '3'); //"23"
console.log(2 + '3'); //"23"
console.log(2 + 1 + 3 + '4' + 5); //"645"
console.log(6 - '2'); //4
console.log(6 / '2'); //3

console.log(+true); //1 унарний оператор +
console.log(+''); //0

let a = 3;
let b = 5;
let c = 1 + 2 + (a = b - 1); //1+2+4   a=4
console.log('c =', c);

let x, y, z;
x = y = z = 4; //так краще не робити
z = 4; //краще робити так
y = z;
x = z;
console.log('x =', x);

let counter = 3;
let size = ++counter; //префіксний інкремент
console.log('size =', size); //4

let counter1 = 3;
let size1 = counter1++; //постфіксний інкремент
console.log('size1 =', size1); //3

(a = 1 + 2), 1 + 5; //оператор кома має найнижчий пріоритет
console.log(a); //3
a = (1 + 2, 1 + 5);
console.log(a); //6

let string1 = 'Fart'; //k>t
let string2 = 'Fark';
console.log('string1 > string2:', string1 > string2); //true

a = 0;
b = '0';
console.log('bool a =', Boolean(a)); //false
console.log('bool b =', Boolean(b)); //true
console.log('a==b =', a == b); //TRUE!

console.log('0===false =', 0 === false); //=== оператор строгої рівності

console.log('null==undefined =', null == undefined); //true
console.log('null===undefined =', null === undefined); //false
console.log('null==0 =', null == 0); //false
console.log('null>0 =', null > 0); //false
console.log('null>=0 =', null >= 0); //true
console.log('Number(undefined) =', Number(undefined)); //NaN
