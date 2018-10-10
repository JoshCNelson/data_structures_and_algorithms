var pivotIndex = function(nums) {
  if (nums.length === 0) { return -1 }

  let leftTotal = 0;
  let rightTotal = 0;
  let pivot = 0;

  for (let i = 1; i < nums.length; i++) {
    rightTotal += nums[i];
  }

  if (leftTotal === rightTotal) { return pivot }

  while (pivot < nums.length) {
    pivot++;
    leftTotal += nums[pivot - 1];
    rightTotal -= nums[pivot];

    if (leftTotal === rightTotal) { return pivot }
  }

  return -1;
};



console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1


// Input: 
// nums = [1, 7, 3, 6, 5, 6]
// Output: 3
// Explanation: 
// The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
// Also, 3 is the first index where this occurs.
// Example 2:
// Input: 
// nums = [1, 2, 3]
// Output: -1
// Explanation: 
// There is no index that satisfies the conditions in the problem statement.