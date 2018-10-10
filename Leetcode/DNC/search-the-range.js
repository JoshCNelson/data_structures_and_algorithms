function searchRange(nums, target) {
  if (nums.length === 0) { return [-1, -1]}
  return [neighbour(nums, target, 'left'), neighbour(nums, target, 'right')];
}

function neighbour(nums, target, direction, start = 0, end = nums.length - 1) {
  let neighbourValue = direction === 'left' ? nums[start - 1] : nums[start + 1];

  if (start === end && nums[start] === target && neighbourValue !== target) {
    return start;
  } else if (start >= end) {
    return -1;
  }

  let mid = start + Math.floor((end - start) / 2);

  return Math.max(neighbour(nums, target, direction, start, mid),
                  neighbour(nums, target, direction, mid + 1, end))
}