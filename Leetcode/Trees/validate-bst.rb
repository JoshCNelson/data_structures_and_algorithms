def is_valid_bst(root, min=nil, max=nil)
  return true if root.nil?

  return false if (!min.nil? && root.val <= min)
  return false if (!max.nil? && root.val >= max) 
  
  return is_valid_bst(root.left, min, root.val) && is_valid_bst(root.right, root.val, max)
end