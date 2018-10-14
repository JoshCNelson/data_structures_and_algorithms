def permute_unique(nums, solution=[], result=[])
  return if solution.length > nums.length

  if solution.size == nums.size && !result.include?(solution)
    result << solution
  end

  nums.uniq.each_with_index do |num, i|
    candidate_solution = solution + [num]

    if candidate_solution.count(num) <= nums.count(num)
      permute_unique(nums, candidate_solution, result)
    end
  end

  result
end