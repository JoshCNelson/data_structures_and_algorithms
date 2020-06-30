# Leetcode #1337: The K Weakest Rows in a Matrix

# @param {Integer[][]} mat
# @param {Integer} k
# @return {Integer[]}
def k_weakest_rows(mat, k)
  # map over each array and binary search for the count
  # return a tuple of this structure [index, count]
  counts_tuple = mat.map.with_index { |arr, idx| [idx, binary_search_count(arr)] }

  # sort by count
  counts_tuple.sort! { |a, b| a[1] <=> b[1] }

  # extract the index from the sorted count and return the first k elements
  counts_tuple.map { |arr| arr[0] }[0..k-1]
end

def binary_search_count(array, left=0, right=array.length-1)
  mid = left + (right - left) / 2
  mid_val = array[mid]

  if right < left
    return array[-1] == 1 ? array.length : 0
  end

  if mid_val == 0
    return mid if array[mid - 1] == 1
    # else go left
    return binary_search_count(array, left, mid - 1)
  else # go right
    return binary_search_count(array, mid + 1, right)
  end
end