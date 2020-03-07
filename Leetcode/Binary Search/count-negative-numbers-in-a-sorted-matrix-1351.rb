# @param {Integer[][]} grid
# @return {Integer}
def count_negatives(grid)
  negatives_count = 0

  grid.each do |arr|
    count = binary_search_count(arr)
    negatives_count += count
  end

  negatives_count
end

def binary_search_count(array, left=0, right=array.length - 1)
  mid = left + (right - left)/2
  mid_val = array[mid]

  if right < left
    if array[left] >= 0
      return array.length - left - 1
    else
      return array.length - left
    end
  end

  if mid_val >= 0

    if left == right
      if array[left] >= 0
        return array.length - left - 1
      else
        return array.length - left
      end
    end

    return binary_search_count(array, mid + 1, right)
  else
    return binary_search_count(array, left, mid - 1)
  end
end