//26. Remove Duplicates from Sorted Array

//Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// solved using sliding window
// time O(N) space O(1)

var removeDuplicates = function(nums) {
  let reader = 0;
  let writer = 0;

  while (reader < nums.length) {
    while (nums[reader] === nums[writer]) {
      reader++;
    }
    
    if (nums[reader] !== nums[writer] && reader < nums.length) {
      writer++;
      nums[writer] = nums[reader];
      reader++;
    }
  }

  return writer + 1;
};


//[1,1,2] => 2
//[0,0,1,1,1,2,2,3,3,4] => 5