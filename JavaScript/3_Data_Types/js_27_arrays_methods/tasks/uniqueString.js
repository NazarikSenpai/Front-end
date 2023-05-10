"use strict";

function uniqueString(strings) {
  let uniqueStrings = {};

  strings.forEach(str => {//Ще більш ефективний і лаконічний варіант з коментарів
    uniqueStrings[str] = 0;
  });
  
  
  /* for (let str of strings) {//більш лаконічний варіант з рішення
    if (!uniqueStrings.includes(str)) {
      uniqueStrings.push(str);
    }
  } */
  
  /* strings.forEach(str => { // мій перший громісткий варіант
    for (let uniqueStr of uniqueStrings) {
      if (uniqueStr === str) { return; }
    }
    uniqueStrings.push(str);
  }); */

  return Object.keys(uniqueStrings);
}


let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(uniqueString(strings)); // кришна, харе, :-O
console.log();