// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function twoSum(array, target) {
  let lookup = {};

  array.forEach((num, idx) => lookup[num] = idx);

  for (let i = 0; i < array.length; i++) {
    lookup[array[i]] = i;
  }

  for (let i = 0; i < array.length; i++) {
    let complement = target - array[i];
    if (lookup[complement] && lookup[complement] !== i) {
      return [i, lookup[complement]];
    }
  }
}