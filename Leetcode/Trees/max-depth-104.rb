def max_depth(root)
  return 0 unless root

  left = max_depth(root.left)
  right = max_depth(root.right)

  return 1 + [left, right].max
end