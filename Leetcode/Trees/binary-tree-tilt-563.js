function findTilt(node, totals=[]) {
  if (!node) {
    return 0;
  }

  let result = findTiltHelper(node, totals);
  return totals.reduce((acc, sum) => acc += sum);
}

function findTiltHelper(node, totals) {
  if (!node) {
    return 0;
  }

  let left = findTiltHelper(node.left, totals);
  let right = findTiltHelper(node.right, totals);

  let tilt = Math.abs(left - right);
  totals.push(tilt);

  return node.val + left + right;
}

