def max_depth(root)
  return 0 unless root

  left = max_depth(root.left)
  right = max_depth(root.right)

  return 1 + [left, right].max
end

def is_balanced(root)
  return true if !root
  left = max_depth(root.left)
  right = max_depth(root.right)

  return (left - right).abs < 2 && is_balanced(root.left) && is_balanced(root.right)
end