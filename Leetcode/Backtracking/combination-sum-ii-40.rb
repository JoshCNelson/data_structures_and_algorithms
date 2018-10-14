def combination_sum2(arr, target)
  combination_sum_helper2(arr.sort, target, 0, [], [])
end

def combination_sum2_helper(arr, target, current, solution, result)
  if solution.sum == target && !result.include?(solution)
    result << solution
  end
  
  arr[current..-1].each do |n|
    candidate_solution = solution + [n]
  
    unless candidate_solution.sum > target
      combination_sum2_helper(arr, target, current += 1, candidate_solution, result)
    end
  end

  result
end