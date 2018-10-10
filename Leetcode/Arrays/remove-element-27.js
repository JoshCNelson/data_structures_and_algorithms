//27. Remove Element 
//Given an array nums and a value val, remove all instances of that value in-place and return the new length.
//Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//The order of elements can be changed. It doesn't matter what you leave beyond the new length.
// time O(n2?) space O(1);



function removeElement(nums, val) {
  let start = 0;
  let end = nums.length;

  while (start < end) {
    while (nums[start] !== val && start < end) {
      start++;
    }
    while (nums[start] === val && start < end) {
      nums.splice(start, 1);
      end--;
    }
    while (nums[end] !== val && start < end) {
      end--;
    }
    while (nums[end] === val && start < end) {
      nums.splice(end, 1);
      end--;
    }
  }

  return nums.length;
}

// O(N log N) 


function removeElement(nums, val) {
  let anchor = 0;
  let count = 0;

  nums.sort((a, b) => a - b);

  while (nums[anchor] !== val && anchor < nums.length - 1) {
    anchor++;
  }

  while (nums[anchor + count] === val) {
    count++;
  }

  nums.splice(anchor, count);
  return nums.length;
}






