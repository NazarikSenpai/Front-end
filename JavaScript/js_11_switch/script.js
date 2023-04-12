"use strict"
let letter = 152;
let b = 1;
switch (letter) {
    case "0":
        console.log("string done");
        break;
    case b - 1:
        console.log("number done");
        break;
    case 152:
    case 73:
        console.log('case grouping');
        break;
    default:
        console.log("default done");
        break;
}

let browser = "OperaGX";
if (browser === "Edge") {
    console.log("You'he got the Edge!");
} else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}

let inputNumber = 2;
switch (inputNumber) {
    case 0:
        console.log('Вы ввели число 0');
        break;
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
    default:
        break;
}
