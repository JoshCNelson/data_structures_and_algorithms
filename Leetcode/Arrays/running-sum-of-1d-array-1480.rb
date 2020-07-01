# Leetcode #1480: Running Sun of 1d Array

# @param {Integer[]} nums
# @return {Integer[]}
def running_sum(nums)
  running_total = 0
  nums.map { |num| running_total += num }
end