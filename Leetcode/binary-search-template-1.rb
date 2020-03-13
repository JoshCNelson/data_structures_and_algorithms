# https://leetcode.com/explore/learn/card/binary-search/125/template-i/938/

=begin
Template #1 is used to search for an element or condition
which can be determined by accessing a single index in the array.

KEY ATTRIBUTES:
1) Most basic and elementary form of Binary Search
2) Search Condition can be determined without comparing
  to the element's neighbors (or use specific elements around it)
3) No post-processing required because at each step, you are checking
  to see if the element has been found. If you reach the end, then you
  know the element is not found
=end

def binary_search(nums, target, left=0, right=nums.length-1)
  return -1 if nums.size == 0
  return -1 if right < left

  mid = left + (right - left) / 2

  if nums[mid] == target
    return mid
  elsif nums[mid] < target # go right
    return binary_search(nums, target, mid + 1, right)
  else # go left
    return binary_search(nums, target, left, mid -1)
  end
end