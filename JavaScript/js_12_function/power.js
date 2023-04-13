"use strict"

function pow(number, powerNumber) {
    if (powerNumber == 1) {
        return number;
    } else if (powerNumber == 0) {
        return 1;
    } else if (powerNumber < 0) {
        return undefined;
    }

    let result = number;

    for (let index = powerNumber; index > 1; index--) {

        result = result * number;

    }

    return result;
}
console.log(pow(13, 2));