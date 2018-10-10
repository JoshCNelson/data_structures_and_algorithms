function insertNode(root, val) {
  if (root.val === val) { return root }

  if (val < root.val && root.left === null) {
    root.left = new root(val);
  } else if (val > root.val && root.right === null) {
    root.right = new root(val);
  } else if (val > root.val) {
    insertNode(root.right, val);
  } else {
    insertNode(root.left, val);
  }

  return root;
}
