def permutes(string, current=0, result=[])
  return [''] if string == ''
  result << string if !result.include?(string)

  return if current >= string.size
  permutes(upper_case(string, current), current + 1, result)
  permutes(lower_case(string, current), current + 1, result)

  result
end

def upper_case(str, n)
  arr = str.split('')
  arr[n].upcase!
  arr.join('')
end

def lower_case(str, n)
  arr = str.split('')
  arr[n].downcase!
  arr.join('')
end