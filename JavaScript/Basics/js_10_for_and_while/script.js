"use strict";
// let repeatNumber = 10;

// let count = 5;
// do {
//     while (repeatNumber) console.log(--repeatNumber);
//     repeatNumber = 10;
// } while (count--);

// let numbers=0;
// let index = 0;
// for (; index < 10;) {
//     numbers += index;
//     console.log(numbers);
//     index++;
// }

// if(true){
//     let x = 10;
//     console.log(x);
// }
// console.log(x);

// let sum = 0;
// while (true) {
//     let inputNumber = +prompt("Write number for sum", '');
//     sum += inputNumber;
//     if (!inputNumber) {
//         break;
//     }
// }

// alert(sum);


// for (let index = 0; index < 20; index++) {
//     if(!!!(index%3)){
//         console.log(index);
//     }

// }

// label:
// for (let offsetX = 0; offsetX < 5; offsetX++) {
//     for (let offsetY = 0; offsetY < 5; offsetY++) {
//       let value = Math.round(Math.random()*10);
//       if (!value) {
//         break label;
//       }  
//       console.log(value);
//     }

// }

// let leftBorder = +prompt("Вкажіть перше число для перевірки напарність:", '');
// let rightBorder = +prompt("Вкажіть останнє число для перевірки напарність:", '');

// alert("Ось усі парі числа у заданому діапазоні:");
// for (; leftBorder <= rightBorder; leftBorder++) {

//     if (leftBorder % 2 == 0) {
//         alert(leftBorder);
//     }
// }

// let index=5;
// while(index){
//     console.log(`Number:${index}`);
//     index--;
// }

// Завдання:
// let inputNumber = 0;
// while (inputNumber != null) {

//     inputNumber = prompt("Введіть число більше за 100:", 0);
//     if(inputNumber>100){
//         break;
//     }

// }

// if (inputNumber != null) {

//     alert(`Ваше число:${inputNumber}`);

// } else {

//     alert("Нажаль ви вирішили не вводити число");

// }

let primeBorder = 20;

if (primeBorder < 2) {
  console.log("Простих чисел нема");
} else {
  primeList:
  for (let counter = 2; counter <= primeBorder; counter++) {
    for (let devider = 2; devider < counter; devider++) {
      if (counter % devider == 0) {
        continue primeList;
      }
    }
    console.log(counter);
  }
}