# Leetcode #69

# @param {Integer} x
# @return {Integer}
def my_sqrt(x, left=0, right=x)
  return x if x < 2
  return left - 1 if right <= left

  mid = left + (right - left) / 2

  if mid * mid == x
    return mid
  elsif mid * mid > x
    return my_sqrt(x, left, mid)
  else
    return my_sqrt(x, mid + 1, right)
  end
end