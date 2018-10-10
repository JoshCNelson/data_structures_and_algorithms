function invertTree(tree) {
  if (tree === null) { return null }
    
  [tree.left, tree.right] = [tree.right, tree.left]
  invertTree(tree.left)
  invertTree(tree.right)
  return tree;
}