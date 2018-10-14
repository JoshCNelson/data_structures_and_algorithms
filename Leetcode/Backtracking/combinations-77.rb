def combinations(n, k, current=1, solution=[], result=[])
  if solution.size == k
    result << solution
  end

  current.upto(n) do |i|
    if !solution.include?(i)
      combinations(n, k, i, solution + [i], result)
    end
  end

  result
end