MAPPING = {
  '2': %w(a b c),
  '3': %w(d e f),
  '4': %w(g h i),
  '5': %w(j k l),
  '6': %w(m n o),
  '7': %w(p q r s),
  '8': %w(t u v),
  '9': %w(w x y z),
}

def phone_combinations(numStr, current=0, solution='', result=[])
  return result if numStr == ''
  if numStr.size == current
    result << solution
    return
  end
  
  MAPPING[numStr[current].to_sym].each do |letter|
    phone_combinations(numStr, current + 1, solution + letter, result)
  end

  result
end

p phone_combinations('233')

