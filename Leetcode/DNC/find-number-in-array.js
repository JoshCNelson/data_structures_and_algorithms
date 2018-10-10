//Find a number in an array and return its index. If not found, return -1

function findNumber(array, target, left=0, right=array.length - 1) {
  if (left >= right) {
    return array[left] === target ? left : -1;
  }

  let mid = left + Math.floor((right - left) / 2);
  let leftSide = findNumber(array, target, left, mid);
  let rightSide = findNumber(array, target, mid + 1, right);

  return leftSide > rightSide ? leftSide : rightSide;
}