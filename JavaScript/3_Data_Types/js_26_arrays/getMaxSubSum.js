'use strict';

console.log(getMaxSubSum([-3, -9, 15, 3, 5]));

function getMaxSubSum(arr) {
  //коротке рішення з коментів
  let bestSum = 0,
    currentSum = 0;
  for (let item of arr) {
    currentSum = Math.max(0, currentSum + item);
    bestSum = Math.max(currentSum, bestSum);
  }
  return bestSum;
}

/* function getMaxSubSum(numbers) {
  
  let currentSum = 0;
  let maxSubSum = 0;

  for (let number of numbers) {
    currentSum += number;
    maxSubSum = Math.max(maxSubSum, currentSum);
    currentSum = currentSum < 0 ? 0 : currentSum;
  }

  return maxSubSum;
} */

/* function getMaxSubSum(numbers) { // O(n^2)
  
  let negativeCount = 0;
  for (let number of numbers) {//All negative numbers check

    if (number < 0) {
      negativeCount++;
    }

    if (negativeCount == numbers.length) {
      return 0;
    }
  }
  
  if (!numbers.length) {
    return 0;
  }

  let maxSubSum = numbers[0];

  for (let i = 0; i < numbers.length; i++){
    let sum = 0;
    
    for (let j = i; j < numbers.length; j++){
      sum += numbers[j];
      maxSubSum = Math.max(maxSubSum, sum);
    }

  }

  return maxSubSum;
} */
