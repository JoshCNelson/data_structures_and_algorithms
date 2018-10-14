def subsets_with_dup(nums)
  subsets_with_dup_helper(nums.sort, [], [])
end

def subsets_with_dup_helper(nums, solution, result)
  result << solution unless result.include?(solution)
  
  nums.each_with_index do |n, i|
    subsets_with_dup_helper(nums[i + 1..-1], solution + [n], result)
  end

  result
end