'use strict';
let name = true;
console.log('name =', name, '\ntype of name:', typeof name);
name = String(name); //string conversion
console.log('name =', name, '\ntype of name:', typeof name);

/* !!!!!!!!!! */
console.log(Number(undefined)); // NaN, conversion error
/* !!!!!!!!!! */

console.log(Number(' 234 ')); // 234
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number('hi there 321')); // NaN, conversion error
console.log(Number(null)); // 0

console.log(Boolean(0)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(null)); //false
console.log(Boolean('')); //false
console.log(Boolean(123)); //true
console.log(Boolean(1)); //true
console.log(Boolean('HELLO')); //true

/* !!!!!!!!!! */
console.log(Boolean('   ')); //true
console.log(Boolean('0')); //true
/* !!!!!!!!!! */

console.log(typeof alert);
