# Problem #852
# @param {Integer[]} a
# @return {Integer}
def peak_index_in_mountain_array(a, left=0, right=a.length-1)
  mid = left + (right - left) / 2
  mid_val = a[mid]

  if mid_val > a[mid - 1] && mid_val > a[mid + 1]
    return mid
  elsif mid_val < a[mid + 1] # go right
    return peak_index_in_mountain_array(a, mid + 1, right)
  else # go left
    return peak_index_in_mountain_array(a, left, mid - 1)
  end
end

# binary search
# time - O(log N)
# return the index of the highest point (interger) in the array
# a will be at minimum length 3 and at most length 10000
# there will exist one point that`
# is higher then the others