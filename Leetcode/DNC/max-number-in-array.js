//Find the maximum number in an array of numbers. Return that number.

// using tail call optimization
function maxNumber(array, current=0, max=-Infinity) {
  if (current === array.length) {
    return array[current] > max ? array[current] : max;
  }

  array[current] > max ? max = array[current] : max;
  return maxNumber(array, current + 1, max);
}

// using non-tail recursive
function maxNumber(array, left=0, right=array.length - 1) {
  if (right === left) {
    return array[left];
  }

  let mid = left + Math.floor((right - left) / 2);
  let leftSide = maxNumber(array, left, mid);
  let rightSide = maxNumber(array, mid + 1, right);

  return leftSide > rightSide ? leftSide : rightSide;
}
