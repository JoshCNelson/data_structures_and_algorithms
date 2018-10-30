var findMaxAverage = function(nums, k) {
  let total = 0;
  let maxAverage = 0;

  for (let i = 0; i < k; i++) {
    total += nums[i];
  }

  maxAverage = total / k;

  for (let i = k; i < nums.length; i++) {
    total -= nums[i - k];
    total += nums[i];
    
    maxAverage = total / k > maxAverage ? total / k : maxAverage;
  }

  return maxAverage;
};