def subsets(nums, solution=[], result=[])
  result << solution unless result.include?(solution)

  nums.each_with_index do |n, i|
    unless solution.include?(n)
      subsets(nums[i..-1], solution + [n], result)
    end
  end

  result
end