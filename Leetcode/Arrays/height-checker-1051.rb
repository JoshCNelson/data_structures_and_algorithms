# Leetcode #1051

# @param {Integer[]} heights
# @return {Integer}
def height_checker(heights)
  # get the max value of the array
  # this allows us to generate the length
  # of the array and fill it with 0s so we can
  # add the counts
  counter = Array.new(heights.max, 0)
  count = 0
  height_pointer = 0

  # iteretate over the array and add to the counter
  heights.each.with_index { |ele| counter[ele - 1] += 1 }

  # iterate over the counter
  counter.each.with_index do |ele, idx|
    # now that we know the count of how many occurences
    # of each height we know how many to expect to see
    # consecutively
    ele.times do |e|
      count += 1 if heights[height_pointer] != idx + 1
      height_pointer += 1
    end
  end

  count
end

# naive? solution
# sort a dup of the array to check against
# time - O(N Log N)
# space - O(N)

# best solution - Counting sort
# time O(N)
# space O(N)
# using counting sort we can count how many times
# we can expect to see a given height. This allows us
# to increment the count each time we see an out of place
# height as we will know it is not in the correct position