# @param {Integer[]} nums
# @return {Integer}
def find_numbers(nums)
  result = 0
  nums.each { |num| result += 1 if detect_even(num) }
  result
end

def detect_even(num, current_count=1)
  return current_count.even? if num < 10
  detect_even(num / 10, current_count + 1)
end

# return number of elements that are an even number of digits
# all numbers will be between 1 and 10^5
# the input array will be between 1 and 500 elements

# naive solution - nested loops
# time - O(N^2)
# iterate over every element
# at each element, break the characters into a string
# get its length, if even add it to the incrementing result

# dividing by 10 method
# time - O(N)
# iterate over each element in the array
# at each element, continually divide it by 10 until it equals 1
# for each division keep a track of how many times it took to get to 1 (counter should start at 1)
# if it is an even add that to the result