# Leetcode #1370: Increasing Decreasing String

# Data structure: array of tuples []Tuple
# Tuple [ascii, count]

def sort_string(s)
  count_array = build_count_array(s)
  result_string = ""

  while result_string.size < s.size

    0.upto(count_array.size - 1) do |idx|
      tuple = count_array[idx]

      if tuple[1] > 0
        result_string += tuple[0].chr
        count_array[idx][1] -= 1
      end
    end

    (count_array.size - 1).downto(0) do |idx|
      tuple = count_array[idx]
      if tuple[1] > 0
        result_string += tuple[0].chr
        count_array[idx][1] -= 1
      end
    end
  end

  result_string
end

def build_count_array(str)
  count_hash = {}

  str.each_char do |c|
    if count_hash[c.ord]
      count_hash[c.ord] += 1
    else
      count_hash[c.ord] = 1
    end
  end

  count_hash.sort
end