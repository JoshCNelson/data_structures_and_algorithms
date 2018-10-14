var sumOfLeftLeaves = function(node, isLeft = false) {
  if (!node)  {
    return 0;
  }

  if (!node.left && !node.right) {
    return isLeft ? node.val : 0;
  }

  return sumOfLeftLeaves(node.left, true) + sumOfLeftLeaves(node.right, false);
};


