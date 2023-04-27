"use strict";

let sentence = "Hello! My name is Joe Baiden.";
console.log(truncate(sentence,20));

function truncate(str, maxLength) { 
  if (str.length <= maxLength) {
    return str;
  }
  
  return str.slice(0, (maxLength - 1)) + "…";
}