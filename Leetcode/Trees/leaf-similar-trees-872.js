function leafSimilar(root1, root2) {
  let leaves1 = [];
  let leaves2 = [];

  dfs(root1, leaves1);
  dfs(root2, leaves2);

  return leaves1.join() === leaves2.join();
}

function dfs(node, leaves) {
  if (!node) { return }

  if (!node.left && !node.right) {
    leaves.push(node.val);
  }

  dfs(node.left, leaves);
  dfs(node.right, leaves);
}