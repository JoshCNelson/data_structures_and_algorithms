function inorder(node, arr=[]) {
  if (node === null) {
    return [];
  }
  
  node.left ? inorder(node.left, arr) : '';
  arr.push(node.val);
  node.right ? inorder(node.right, arr) : '';

  return arr;
}
