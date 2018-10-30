function searchRange(array, target) {
  lowerIndex = getLowerIndex(array, target - 1);
  upperIndex = getUpperIndex(array, target + 1);
  
  if (upperIndex < lowerIndex) {
    return [-1, -1];
  }

  return [lowerIndex, upperIndex];
}

function getLowerIndex(array, currentTarget) {
  let lower = 0;
  let upper = array.length - 1;

  while (lower + 1 < upper) {
    let mid = Math.floor(lower + (upper - lower) / 2);
    let value = array[mid];
    
    if (value > currentTarget && (upper - lower > 1)) {
      upper = mid;
    } else if (value <= currentTarget && (upper - lower > 1)) {
      lower = mid;
    }
  }
  
  let lowerIndex;
  
  if (array[lower] === target) {
    lowerIndex = lower;
  } else if (array[upper] === target) {
    lowerIndex = upper;
  } else {
    lowerIndex = upper + 1;
  }

  return lowerIndex;
}

function getUpperIndex(array, currentTarget) {
  lower = 0;
  upper = array.length - 1;

  
  while (lower + 1 < upper) {
    let mid = Math.floor(lower + (upper - lower) / 2);
    value = array[mid];
  
    if (value >= currentTarget && (upper - lower > 1)) {
      upper = mid;
    } else if (value < currentTarget && (upper - lower > 1)) {
      lower = mid;
    }
  }

  let upperIndex;

  if (array[upper] === target) {
  upperIndex = upper;
  } else if (array[lower] === target) {
    upperIndex = lower;
  } else {
    upperIndex = lower - 1;
  }

  return upperIndex;
}

// searchRange([5,7,7,8,8,10], 8)); //[3, 4];
// searchRange([5,7,7,8,8,10], 6)); //[-1, -1];