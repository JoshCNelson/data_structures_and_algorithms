function maxDepth(node) {
  if (node === null) {
    return 0;
  }
  let queue = [node];
  let maxDepth = 1;
  node.level = 1;

  while (queue.length > 0) {
    let tempNode = queue.shift();

    if (tempNode.left) {
      tempNode.left.level = tempNode.level + 1;
      queue.push(tempNode.left);
    }

    if (tempNode.right) {
      tempNode.right.level = tempNode.level + 1;
      queue.push(tempNode.right);
    }

    tempNode.level > maxDepth ? maxDepth = tempNode.level : tempNode.level;
  }

  return maxDepth
}

function traverse(node, arr=[]) {
  if (node === null) {
    return 0;
  }

  arr.push(maxDepth(node.left) + maxDepth(node.right));
  traverse(node.left, arr);
  traverse(node.right, arr);
}

function diameter(node) {
  let values = [];
  traverse(node, values);
  return Math.max(...values);
}