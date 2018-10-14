def generate_parens(n, solution='', result=[])
  return if solution.size > (n * 2)
  
  if valid_parens(solution, n * 2) && !result.include?(solution)  
    result << solution
  end

  generate_parens(n, solution + '(', result)
  generate_parens(n, solution + ')', result)

  result
end

def valid_parens(string, len)
  return false if string.size != len 
  stack = []
  
  string.each_char do |s|
    if s == ')'
      return false if stack.pop != '('
    else
      stack << string[s]
    end
  end

  stack.empty?
end