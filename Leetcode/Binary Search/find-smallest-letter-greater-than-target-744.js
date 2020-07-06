// Leetcode #744: Find Smallest Letter Greater than Target

var nextGreatestLetter = function (letters, target, left = 0, right = letters.length - 1) {
  if (left >= right) {
    if (letters[left] > target) {
      return letters[left];
    } else if (left === letters.length - 1) { // we need to wrap around to the beginning
      return letters[0];
    } else {
      return letters[left + 1];
    }
  }

  let mid = Math.floor(left + (right - left) / 2);

  if (letters[mid] > target) {
    return nextGreatestLetter(letters, target, left, mid);
  } else {
    return nextGreatestLetter(letters, target, mid + 1, right)
  }
};