function flatten(root) {
  let result = flattenHelper(root, []);
  
  for (let i = 0; i < result.length - 1; i++) {
    result[i].left = null;
    result[i].right = result[i + 1];
  }
}

function flattenHelper(root, array) {
  array.push(root);
  if (root.left !== null) { flattenHelper(root, array) }
  if (root.right !== null) { flattenHelper(root, array) }
  
  return array;
}