//Given a binary tree, find its minimum depth.
//
//The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
//
//Note: A leaf is a node with no children.
//
//Example:
//
//Given binary tree [3,9,20,null,null,15,7],
//
//    3
//   / \
//  9  20
//    /  \
//   15   7
//return its minimum depth = 2.

function minimumDepth(tree, depth=1) {
  if (tree === null) { return 0 }
  if (tree.left === null && tree.right === null) { return depth}

  let leftResult = minimumDepth(tree.left, depth + 1);
  let rightResult = minimumDepth(tree.right, depth + 1);
  rightResult === 0 ? rightResult = Infinity : rightResult;
  leftResult === 0 ? leftResult = Infinity : leftResult;
    
  return Math.min(leftResult, rightResult);
}