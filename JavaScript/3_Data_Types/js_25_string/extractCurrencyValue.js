'use strict';

let price = '$599';

console.log('Curent prise in dollars:', extractCurrencyValue(price));

function extractCurrencyValue(str) {
  if (str[0] != '$') {
    return str;
  }

  return parseInt(str.slice(1));
}
