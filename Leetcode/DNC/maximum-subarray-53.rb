# Leetcode #53: Maximum Subarray

# Mental Model: Divide and Conquer
# Find the max between the left, right, and cross subarrays

# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums, left=0, right=nums.size-1)
  return nums[right] if left == right

  mid = (left + right) / 2

  left_subarray_sum = max_sub_array(nums, left, mid)
  right_subarray_sum = max_sub_array(nums, mid + 1, right)
  max_cross_subarray_sum = max_cross_subarray_sum(nums, left, mid, right)

  [left_subarray_sum, right_subarray_sum, max_cross_subarray_sum].max
end

def max_cross_subarray_sum(nums, left, mid, right)
  left_sum = -Float::INFINITY
  sum = 0

  mid.downto(left) do |index|
    sum += nums[index]
    left_sum = sum if sum > left_sum
  end

  right_sum = -Float::INFINITY
  sum = 0

  # do not forget we need to start at mid + 1
  (mid + 1).upto(right) do |index|
    sum += nums[index]
    right_sum = sum if sum > right_sum
  end

  left_sum + right_sum
end