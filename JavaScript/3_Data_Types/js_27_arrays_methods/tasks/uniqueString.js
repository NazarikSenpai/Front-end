"use strict";

function uniqueString(strings) {
  let uniqueStrings = [];

  strings.forEach(str => {
    for (let uniqueStr of uniqueStrings) {
      if (uniqueStr === str) { return; }
    }
    uniqueStrings.push(str);
  });

  return uniqueStrings;
}


let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(uniqueString(strings)); // кришна, харе, :-O
console.log();