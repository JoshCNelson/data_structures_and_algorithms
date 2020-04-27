# Leetcode: #153 Find Minimum in Rotated Sorted Array

def find_min(nums, left=0, right=nums.length - 1)
  return nums[left] if left >= left

  mid = left + (right - left) / 2
  mid_val = nums[mid]

  if mid_val > nums[right]
    return find_min(nums, mid + 1, right)
  else
    # we do not do mid - 1 here because
    # mid COULD be the pivot. We only know
    # that elements to the right of it
    # CANNOT be the pivot
    return find_min(nums, left, mid)
  end
end
