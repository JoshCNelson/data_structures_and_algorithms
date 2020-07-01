# Leetcode #1431: Kids with the Greatest Number of Candies

# @param {Integer[]} candies
# @param {Integer} extra_candies
# @return {Boolean[]}
def kids_with_candies(candies, extra_candies)
  greatest = candies.max
  candies.map { |childs_candies| greatest <= childs_candies + extra_candies }
end