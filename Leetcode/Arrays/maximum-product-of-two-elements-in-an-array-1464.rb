# Leetcode #1464: Maximum Product of Two Elements in an Array

# @param {Integer[]} nums
# @return {Integer}
def max_product(nums)
  greatest = 0
  second_greatest = 0

  nums.each do |ele|
    if ele > greatest
      second_greatest = greatest
      greatest = ele
    elsif ele > second_greatest
      second_greatest = ele
    end
  end

  (greatest - 1) * (second_greatest - 1)
end