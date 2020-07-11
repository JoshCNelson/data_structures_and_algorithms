# Leetcode #441: Arranging Coins

# @param {Integer} n
# @return {Integer}
def arrange_coins(n, low = 0, hi = n)
  return hi if low > hi

  mid = low + (hi - low) / 2

  # This is the equation we need to
  # help us determine if we found the answer
  # or need to go up or down
  current = mid * (mid + 1) / 2

  return mid if current == n

  if n < current # go down
    return arrange_coins(n, low, mid - 1)
  else
    return arrange_coins(n, mid + 1, hi)
  end
end