//209. Minimum Size Subarray Sum
//Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

// naive solution
//start w/ 1 index and iterate over
// if not greater then the target is found
// iterate over again but with a sub array of two
// if not found continue to subarray of 3 and on and on

// use the anchor / runner to track what the smallest possible sub array is.
// when the anchor / runner is greater then the target we stop and compare it to the current minimum subarray to beat
// if it is less then the min to beat, we set it as the new min and then move the anchor up 1 
// this is solved using running slides

function minimumSubSum(s, array) {
  let anchor = 0;
  let runner = 0;
  let currentTotal = array[anchor];
  let count = 1;
  let minSub = Infinity;

  while (runner < array.length) {

    while (currentTotal < s) {
      runner++;
      count++;
      currentTotal += array[runner];
    }
    count < minSub ? minSub = count : count;
    currentTotal -= array[anchor];
    anchor++;
    count--;
  }

  return minSub === Infinity ? 0 : minSub;
}
