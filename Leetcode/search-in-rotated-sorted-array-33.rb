# Leetcode #33

=begin
To solve this we must find the pivot (the low point in the rotation).
Once we have found the pivot all we need to do is determine whether to
execute a binary search to the left or right of the pivot
because either side of the pivot is now in order and ascending
=end

def search(nums, target, left=0, right=nums.length-1)
  return -1 if nums.length == 0
  pivot = find_pivot(nums, left, right)

  return pivot if nums[pivot] == target

  if nums[pivot] < target && nums[right] >= target
    return binary_search(nums, target, pivot + 1, right)
  else
    return binary_search(nums, target, left, pivot - 1)
  end
end

def find_pivot(nums, left=0, right=nums.length-1)
  return left if left >= right
  mid = left + (right - left) / 2
  mid_val = nums[mid]

  if mid_val > nums[right]
    return find_pivot(nums, mid + 1, right)
  else
    return find_pivot(nums, left, mid)
  end
end

def binary_search(nums, target, left, right)
  mid = left + (right - left) / 2
  mid_val = nums[mid]

  if right < left
    return -1
  end

  if mid_val == target
    return mid
  elsif mid_val < target
    return binary_search(nums, target, mid + 1, right)
  else
    return binary_search(nums, target, left, mid - 1)
  end
end