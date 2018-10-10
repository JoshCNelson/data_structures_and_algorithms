function isSymmetric(tree) {
  if (tree === null) { return true }
  if (!tree.left || !tree.right) { return tree.left === tree.right }
  let right = invert(tree.right);
  return symmetricHelper(tree.left, right);
}

function invert(tree) {
  if (tree === null) { return }

  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
  invert(tree.left)
  invert(tree.right)
  return tree;
}

function symmetricHelper(tree1, tree2) {
  if (tree1 === null || tree2 === null) { return tree1 === tree2 }

  return tree1.val === tree2.val &&
  symmetricHelper(tree1.left, tree2.left) &&
  symmetricHelper(tree1.right, tree2.right)
}