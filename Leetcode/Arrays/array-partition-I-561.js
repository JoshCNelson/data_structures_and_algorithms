var arrayPairSum = function(nums) {
  let result = 0;
  
  // If we sort first we can just take every other value to get result
  nums.sort((a, b) => (a - b));

  for (let i = 0; i < nums.length; i += 2){
    result += nums[i];
  }
  return result;
};