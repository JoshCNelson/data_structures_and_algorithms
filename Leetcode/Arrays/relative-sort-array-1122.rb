# Leetcode 1122: Relative Sort Array

# @param {Integer[]} arr1
# @param {Integer[]} arr2
# @return {Integer[]}
def relative_sort_array(arr1, arr2)
  counts_table = Array.new(arr1.max + 1, 0)
  idx = 0

  arr1.each { |num| counts_table[num] += 1 }

  arr2.each do |num|
    until counts_table[num] == 0
      arr1[idx] = num
      counts_table[num] -= 1
      idx += 1
    end
  end

  counts_table.each.with_index do |num, index|
    counts = num
    until counts == 0
      arr1[idx] = index
      idx += 1
      counts -= 1
    end
  end

  arr1
end