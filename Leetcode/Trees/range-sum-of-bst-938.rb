# Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

# The binary search tree is guaranteed to have unique values.

# divide and conquer algorithm
# This is actually not the best way to do
# this since we know it is a bst we can just
# follow the path instead of going to every node
def range_sum_bst(root, l, r, sum=0)
  return 0 if !root;

  left = range_sum_bst(root.left, l, r, sum)
  right = range_sum_bst(root.right, l, r, sum)
  between_range = root.val >= l && root.val <= r

  if between_range
      return left + right + root.val
  else
      return left + right
  end
end
