# Leetcode 1588: Sum of All Odd Length Subarrays

# Iterative Approach
# @param {Integer[]} arr
# @return {Integer}
def sum_odd_length_subarrays(arr)
  result = 0

  0.upto(arr.size - 1) do |n|
    start = n

    while start < arr.size
      result += arr[n..start].sum
      start += 2
    end
  end
  result
end