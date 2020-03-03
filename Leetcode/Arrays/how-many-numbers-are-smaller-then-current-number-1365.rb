# @param {Integer[]} nums
# @return {Integer[]}
def smaller_numbers_than_current(nums)
  sorted = nums.sort { |a,b| b <=> a }
  cache = {}

  sorted.each.with_index { |num, idx| cache[num] = (sorted.length - idx - 1) }
  nums.map { |num| cache[num] }
end

# return array where each value is replaced by the
# number which describes how many numbers in the
# array are smaller

# there are at least two elements in every array
# each number is 0 or greater


# naive solution
# time complexity - n2
# at each element, iterate over the entire array and keep a count
# of numbers smaller then the current value

# sorting
# time - n log n
# space - n
# sort the list from greatest to smallest
# iterate over the sorted list, at each element
# set the key to the current element
# and the value to the length of the sorted array - idx - 1
# this will cause values with dups to work because factoring in
# the index means the later values will overwrite the incorrect
# initial value.
# map over the initial array, and swap out the current value
# for its associated value from the hash

