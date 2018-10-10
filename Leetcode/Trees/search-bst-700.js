function searchBST(root, target) {
  if (!root) { return [] }

  if (root.val === target) {
    return root;
  } else if (root.val > target) {
    return searchBST(root.left, target);
  } else {
    return searchBST(root.right, target)
  }
}