'use strict';

function getAverageAge(years) {
  if (!years.length) return 0;

  let ages = years.map((years) => +years.slice(-4) - +years.slice(0, 4));

  return Math.round(ages.reduce((sum, age) => (sum += age), 0) / ages.length);
}

console.log(getAverageAge([]));
