'use strict';

// eslint-disable-next-line no-unused-vars
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);
  let average =
    classPoints.reduce((sum, point) => sum + point, 0) / classPoints.length;

  return yourPoints > average;
}
