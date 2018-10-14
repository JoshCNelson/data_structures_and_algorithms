function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function traverse(nodeToTraverse, targetSubTree) {
  if (nodeToTraverse === null) {
    return false;
  } 

  if (isSameNode(nodeToTraverse, targetSubTree)) {
    return true;
  } else  {
    return traverse(nodeToTraverse.left, targetSubTree) || traverse(nodeToTraverse.right, targetSubTree);
  }
}

function isSameNode(node1, node2) {
  if (!node1 && !node2) { // both nodes don't exist, the true breaking condition
    return true;
  }
  
  if (!node1 || !node2) { // one of the nodes still exists, the false breaking condition
    return false;
  }

  if (node1.val === node2.val &&
     isSameNode(node1.left, node2.left) &&
     isSameNode(node1.right, node2.right)) {
    return true;
  } else {
    return false;
  } 
}


