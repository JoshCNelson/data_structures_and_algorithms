var combinationSum3 = function(numSetSize, target) {
  let result = [];

  combinationSum3Helper([1, 2, 3, 4, 5, 6, 7, 8, 9], numSetSize, target, 0, [], result);
  return result;
};

function combinationSum3Helper(nums, numSetSize, target, index, solution, result) {
  if (target < 0) { return }
  if (target === 0 && solution.length === numSetSize) {
    result.push(solution.slice());
    return;
  }

  for (let i = index; i < nums.length; i++) {
    solution.push(nums[i]);
    combinationSum3Helper(nums, numSetSize, target - nums[i], i + 1, solution, result);
    solution.pop();
  }
}