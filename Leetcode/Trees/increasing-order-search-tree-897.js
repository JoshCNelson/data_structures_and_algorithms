var increasingBST = function(tree) {
  let result = [];
  
  increasingBSTHelper(tree, result);
  let head = result[result.length - 1];

  for (let i = result.length - 1; i > 0; i--) {
    result[i].left = null;
    result[i].right = result[i - 1];
  }

  result[0].left = null;
  result[0].right = null;

  return head;
};

function increasingBSTHelper(tree, result) {
  if (!tree) { return }

  increasingBSTHelper(tree.right, result);
  result.push(tree);
  increasingBSTHelper(tree.left, result);
}
