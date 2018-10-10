//153. Find Minimum in Rotated Sorted Array

function findMin(array) {
  let lower = 0;
  let upper = array.length - 1;

  while (lower + 1 < upper) {
    let mid = Math.floor(lower + (upper - lower) / 2);
    let midVal = array[mid];
    let rightVal = array[mid + 1];
    let farthestRightVal = array[upper];
    
    if (midVal > rightVal) {
      return rightVal;
    } else if ( rightVal > midVal && farthestRightVal > midVal) {
      upper = mid;
    } else {
      lower = mid;
    }
  }

  return array[lower] < array[upper] ? array[lower] : array[upper];
}

// Mental Model - Find the Ditch. We know the values are ascending and 
// that there is only one point, "the ditch", where the next value will
// descend