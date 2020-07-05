# Problem #852
# @param {Integer[]} a
# @return {Integer}
def peak_index_in_mountain_array(a, left=0, right=a.length-1)
  return left if left >= right

  mid = left + (right - left) / 2

  if a[mid] < a[mid + 1]
    return peak_index_in_mountain_array(a, mid + 1, right)
  else
    return peak_index_in_mountain_array(a, left, mid)
  end
end

# binary search
# time - O(log N)
# return the index of the highest point (interger) in the array
# a will be at minimum length 3 and at most length 10000
# there will exist one point that`
# is higher then the others