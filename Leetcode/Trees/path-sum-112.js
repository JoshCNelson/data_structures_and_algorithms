function pathSum(tree, target, sum=0) {
  if (tree.left === null && tree.right === null && sum + tree.val === target) { 
    return true 
  }
  let left;
  let right;
  if (tree.left) { left = pathSum(tree.left, target, sum + tree.val) }
  if (tree.right) { right = pathSum(tree.right, target, sum + tree.val) }
  return left || right ? true : false;
}