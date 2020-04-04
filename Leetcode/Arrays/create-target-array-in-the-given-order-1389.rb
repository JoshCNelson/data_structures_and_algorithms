# Leetcode #1389

# @param {Integer[]} nums
# @param {Integer[]} index
# @return {Integer[]}
def create_target_array(nums, index)
  counter = 0
  result = []

  while counter < nums.size
    num = nums[counter]
    index_to_place = index[counter]

    unless result[index_to_place]
      result << num
    else
      if index_to_place == 0
        result = [num] + result
      else
        result = result[0..index_to_place - 1] + [num] + result[index_to_place..-1]
      end
    end

    counter += 1
  end

  result
end