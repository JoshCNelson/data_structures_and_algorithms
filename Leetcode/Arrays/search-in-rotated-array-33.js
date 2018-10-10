//33. Search in Rotated Sorted Array

//Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
//(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
//You are given a target value to search. If found in the array return its index, otherwise return -1.
//You may assume no duplicate exists in the array.
//Your algorithm's runtime complexity must be in the order of O(log n).


function findMin(array, target) {
  let lower = 0;
  let upper = array.length - 1;

  while (lower + 1 < upper) {
    let mid = Math.floor(lower + (upper - lower) / 2);
    let midVal = array[mid];
    let farthestRightVal = array[array.length - 1];
    
    if (midVal === target) {
      return mid;
    } else if (midVal > target && farthestRightVal < target) {
      lower = mid;
    } else if (midVal > target && farthestRightVal > target) {
      upper = mid;
    } else if (midVal < target && farthestRightVal < target) {
      lower = mid;
    } else {
      upper = mid;
    }
  }
  console.log(array[lower], array[upper], target);
  //return array[lower] < array[upper] ? array[lower] : array[upper];
}

console.log(findMin([4,5,6,7,0,1,2], 0));// 4
console.log(findMin([4,5,6,7,0,1,2], 3));// -1

//Input: nums = [4,5,6,7,0,1,2], target = 0
//Output: 4
//Example 2:
//
//Input: nums = [4,5,6,7,0,1,2], target = 3
//Output: -1