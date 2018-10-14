def partition(string, length=string.size, solution=[], result=[])
  if !result.include?(solution) && solution.join.size == length
    result << solution
  end

  1.upto(string.size) do |s|
    next unless palindrome(string[0...s])
    partition(string[s..-1], length, solution + [string[0...s]], result)
  end

  result
end

def palindrome(str, left=0, right=str.length - 1)
  return false if str[left] != str[right]
  return str[left] == str[right] if left >= right
  return palindrome(str, left += 1, right -= 1)
end