def sum_numbers(root, numbers = '')
  return 0 unless root

  numbers += root.val.to_s

  if root.left.nil? && root.right.nil?
    numbers.to_i
  else
    sum_numbers(root.left, numbers) + sum_numbers(root.right, numbers)
  end
end