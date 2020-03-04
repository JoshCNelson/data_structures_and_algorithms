# @param {Integer[]} nums
# @return {Integer[]}
def decompress_rl_elist(nums)
  result = []
  current_idx = 0

  while current_idx < nums.length - 1
    freq = nums[current_idx]
    val = nums[current_idx + 1]

    freq.times { result.push(val) }
    current_idx += 2
  end

  result
end

print decompress_rl_elist([1,2,3,4]) == [2,4,4,4]

# take 2 elements
# The first element is the number of times the second element should appear
# the second element is the number that will be decompressed
# [3,5] => [5,5,5]

# solution mental model -> k window slide
# time - O(N) - NOTE: not actually sure that this is not O(N^2)
#                     due to iterating <over current val> at each stop
# space - O(N)

# loop over the list until current value is larger then the array length
# have a pointer for current value and next value
# on result array:
# push (idx + 1) value onto result array <idx> times
# return the result array

