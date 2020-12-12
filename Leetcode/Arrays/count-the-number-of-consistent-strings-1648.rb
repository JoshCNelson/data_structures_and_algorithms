# Leetcode 1684: Count the Number of Consistent Strings

# @param {String} allowed
# @param {String[]} words
# @return {Integer}
def count_consistent_strings(allowed, words)
  map = {}
  allowed.each_char { |char| map[char] = char }

  words.reject do |word|
    index = 0
    flag = false
    while index < word.size
      break if flag

      flag = true unless map[word[index]]

      index += 1
    end

    flag
  end.size
end