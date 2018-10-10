//162. Find Peak Element

//A peak element is an element that is greater than its neighbors.
//Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.
//The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.
//You may imagine that nums[-1] = nums[n] = -∞.

function findPeak(array) {
  let lower = 0;
  let upper = array.length - 1;

  while (lower + 1 < upper) {
    let mid = Math.floor(lower + (upper - lower) / 2);
    left = mid - 1;
    right = mid + 1;

    let leftVal = array[left] || -Infinity
    let rightVal = array[right] || -Infinity

    if (array[mid] > leftVal && array[mid] > rightVal) {
      return mid;
    }

    if (leftVal > array[mid]) {
      upper = mid;
    } else if (rightVal > array[mid]) {
      lower = mid;
    }
  }

  return array[lower] > array[upper] ? lower : upper;
}

// "Mountain Climber" binary search. If the very first middle isn't a peak, we know we can find a peak by traveling 
// uphill. At worst it will take us to the ends up the array to find a peak