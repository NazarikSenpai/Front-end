'use strict';
// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// let currentHour = 20;
// let isWeekend = false;

// if (currentHour < 10 || currentHour > 22 || isWeekend) {
//     console.log("We are closed now");
// }

// let firsName = 'Nazariy';
// let lastName = '';
// let nickname = 'br0gy4g4!!!228';

// console.log(firsName || lastName || nickname);
// true || console.log('Doesn`t logged');
// false || console.log('Logged');

// console.log(23 && 24);
// let currentHour = 13;
// let currentMinute = 54;
// if (currentHour == 12 || currentHour == 13 && currentMinute == 47 || currentMinute == 54) {
//     console.log('Time is 12:47 or 13:54 now =)');
// } else {
//     console.log('Your time isn`t 12:47 or 13:54');
// }

// let stringOfNumbers = "423234432";
// console.log(!!stringOfNumbers);

// let age = 13;
// if (age >= 14 && age <= 90) {
//     console.log('Your age is between 14 and 90');
// }
// if (!(age >= 14 && age <= 90)) {
//     console.log('Your age isn`t between 14 and 90');
// }
// if (age > 14 || age < 90) {
//     console.log('Your age isn`t between 14 and 90');
// }
let password = 'TheMaster';
let userLogin = prompt('Login:', '');
let userPassword = '';
if (userLogin === 'Admin') {
  userPassword = prompt('Password:', '');

  if (userPassword === password) {
    alert('Welcome!');
  } else if (userPassword != null) {
    alert('Wrong password');
  }
} else if (userLogin != null) {
  alert('I don`t know you');
}

if (userLogin == null || userPassword == null) {
  alert('Canseled');
}
