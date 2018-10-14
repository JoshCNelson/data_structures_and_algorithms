def combination_sum(arr, target, solution=[], result=[])
  if solution.sum == target && !result.include?(solution)
    result << solution
  end

  arr.each_with_index do |n, i|
    candidate_solution = solution + [n]

    unless candidate_solution.sum > target
      combination_sum(arr[i..-1], target, candidate_solution, result)
    end
  end

  result
end