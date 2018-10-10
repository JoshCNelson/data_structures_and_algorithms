// 167. Two Sum II - Input array is sorted


//Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
//
//The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.
//
//Note:
//
//Your returned answers (both index1 and index2) are not zero-based.
//You may assume that each input would have exactly one solution and you may not use the same element twice.


//Input: numbers = [2,7,11,15], target = 9
//Output: [1,2]
//Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.


//we want to start at beginning and end 
// move start pointer right if target is greater then a + b
// move end pointer left if target is less then a + b

function twoSum(array, target) {
  let start = 0;
  let end = array.length - 1;
  let currentTotal = array[start] + array[end];

  while (currentTotal !== target) {
    if (currentTotal > target) {
      end--;
      currentTotal = array[start] + array[end];
    } else if (currentTotal < target) {
      start++;
      currentTotal = array[start] + array[end];
    }
  }

  return [start + 1, end + 1];
}




