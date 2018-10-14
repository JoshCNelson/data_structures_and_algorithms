function Tree(val) {
  this.val = val;
  this.left = this.right = null;
}

function generateTree(...nodes) {
  let rootNode = new Tree(nodes.shift()); 
  rootNode.left = new Tree(nodes.shift());
  rootNode.right = new Tree(nodes.shift());
  rootNode.left.right = new Tree(nodes.shift());
  return rootNode;
}

var binaryTreePaths = function(tree) {
  if (!tree) { return [] }
  let result = [];

  binaryTreePathsHelper(tree, result, '');
  return result;
};

function binaryTreePathsHelper(tree, result, str) {
  if (!tree) { return }
  
  if (tree.left === null && tree.right === null) {
    str += tree.val;
    result.push(str);
  } else {
    str += `${tree.val}->`;
    binaryTreePathsHelper(tree.left, result, str)
    binaryTreePathsHelper(tree.right, result, str);
  }
}

let tree = generateTree(1, 2, 3, 5);


console.log(binaryTreePaths(tree));

// Input:

//   1
// /   \
// 2     3
// \
// 5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3