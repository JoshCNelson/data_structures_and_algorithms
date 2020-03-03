# 1342 - Recursive Solution

# @param {Integer} num
# @return {Integer}
def number_of_steps (num, steps=0)
  return steps if num == 0

  num.even? ? number_of_steps(num / 2,steps + 1) : number_of_steps(num -1, steps + 1)
end

# return number of steps when num equals 0
# input is non-negative
# if num is even, divide by 2
# if num is odd, subtract by 1
