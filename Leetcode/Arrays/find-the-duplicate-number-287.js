var findDuplicate = function(nums) {
  let first = 0;
  let second = 1;

  nums.sort();

  while (true) {
    if (nums[first] === nums[second]) {
      return nums[first];
    } 

    first++;
    second++;
  }
};