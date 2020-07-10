# Leetcode #374: Guess Number Higher or Lower

# The guess API is already defined for you.
# @param num, your guess
# @return -1 if my number is lower, 1 if my number is higher, otherwise return 0
# def guess(num)

def guessNumber(n)
  low = 1
  high = n

  loop do
    mid = low + (high - low) / 2
    feedback = guess(mid)

    if feedback == 0
      return mid
    elsif feedback == 1
      low = mid + 1
    else
      high = mid - 1
    end
  end
end