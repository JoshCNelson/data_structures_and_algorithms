# Space O(N)
# Time O(N Log N)

def sorted_squares(arr)
  arr.map do |a|
    a ** 2
  end.sort
end


