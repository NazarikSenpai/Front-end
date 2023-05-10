"use strict";

function uniqueString(strings) {
  let uniqueStrings = [];

  for (let str of strings) {//більш лаконічний варіант з рішення
    if (!uniqueStrings.includes(str)) {
      uniqueStrings.push(str);
    }
  }
  
  /* strings.forEach(str => { // мій перший громісткий варіант
    for (let uniqueStr of uniqueStrings) {
      if (uniqueStr === str) { return; }
    }
    uniqueStrings.push(str);
  }); */

  return uniqueStrings;
}


let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(uniqueString(strings)); // кришна, харе, :-O
console.log();