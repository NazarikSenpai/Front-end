"use strict";

var twoSum = function (nums, target) {
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++){

    for (let secondIndex = firstIndex + 1; secondIndex < nums.length; secondIndex++){
      if (nums[firstIndex] + nums[secondIndex] == target) return [firstIndex, secondIndex];
    }
    
  }
};

console.log(twoSum([3, 3], 6));