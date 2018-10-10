def two_sum(array, target)
  start = 0
  ending = array.size - 1
  current_total = array[start] + array[ending]
  
  while current_total != target
    if current_total > target
      ending -= 1
      current_total = array[start] + array[ending]
    else 
      start += 1
      current_total = array[start] + array[ending]ß
    end
  end

  [start + 1, ending + 1]
end




