# Leetcode 1002: Find Common Characters

# @param {String[]} a
# @return {String[]}
def common_chars(a)
  base_char_map = {}

  a[0].each_char do |char|
    if base_char_map[char]
      base_char_map[char] += 1
    else
      base_char_map[char] = 1
    end
  end

  a[1..-1].each do |word|
    letter_map = {}
    word.each_char do |char|
      # we can skip if we are going to surpass the base or the base_char_map doesn't have the current char
      next if !base_char_map[char]
      next if base_char_map[char] == letter_map[char]

      if letter_map[char]
        letter_map[char] += 1
      else
        letter_map[char] = 1
      end
    end

    letter_map.each do |k, v|
      base_char_map[k] = v if base_char_map[k] > v
    end

    base_char_map.each do |k, v|
      if !letter_map[k]
        base_char_map.delete(k)
      end
    end
  end

  result = []
  base_char_map.each do |k, v|
    v.times { |letter| result << k }
  end

  result
end