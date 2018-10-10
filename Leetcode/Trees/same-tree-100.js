function sameTree(tree1, tree2) {
  if (tree1 === null || tree2 === null) { return tree1 === tree2 }

  return tree1.val === tree2.val &&
  sameTree(tree1.left, tree2.left) &&
  sameTree(tree1.right, tree2.right)
}