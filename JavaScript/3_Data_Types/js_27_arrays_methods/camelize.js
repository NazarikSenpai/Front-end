"use strict";

console.log(camelize("-webkit-transition"));

function camelize(words) {
  return words.split("-").map((word, index) => index == 0 ? word : word.at(0).toUpperCase() + word.slice(1)).join("");

  /* //Моє рішення
  let arrOfWords = word.split("");
  arrOfWords = arrOfWords.map((letter, index) => {
    if (arrOfWords[index - 1] === "-" && index > 0) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  });

  return arrOfWords.filter(letter => letter !== "-").join(""); */
}

/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString». */