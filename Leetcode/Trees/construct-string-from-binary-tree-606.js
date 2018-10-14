function tree2str(node) {
  if (!node) { return '' }
  if (!node.left && !node.right) { return `${node.val}` }

  let left = tree2str(node.left);
  let right = tree2str(node.right); 

  return right === '' ? `${node.val}(${left})` : `${node.val}(${left})(${right})`;
}