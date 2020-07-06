// Leetcode #367: Valid Perfect Square
//Given a positive integer num, write a function which returns True if num is a perfect square else False.

function validPerfectSquares(n) {
  if (n === 1) { return true; }

  let lower = 0;
  let upper = n;

  while (lower + 1 < upper) {
    let mid = lower + Math.floor((upper - lower) / 2);
    let product = mid * mid;

    if (product === n) {
      return true;
    } else if (product > n) {
      upper = mid;
    } else {
      lower = mid;
    }
  }
  return false;
}

// mental model - binary search for numbers! We apply the same
// principles but use strictly values instead of indexes