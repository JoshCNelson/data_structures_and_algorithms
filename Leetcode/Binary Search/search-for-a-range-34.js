//34. Search for a Range
//Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.
//Your algorithm's runtime complexity must be in the order of O(log n).


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
  
  let lowerIndex
  
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

function searchRange(array, target) {
  lowerIndex = getLowerIndex(array, target - 1);
  upperIndex = getUpperIndex(array, target + 1);
  
  if (upperIndex < lowerIndex) {
    return [-1, -1];
  }

  return [lowerIndex, upperIndex];
}

csearchRange([5,7,7,8,8,10], 8)); //[3, 4];
csearchRange([5,7,7,8,8,10], 6)); //[-1, -1];

//
//lower = 0
//upper = array.length - 1
//currentTarget = target - 1
//
//while lower + 1 < upper
//  mid = lower + Math.floor((upper - lower) / 2)
//  value = array[mid]
//  if value > currentTarget && (upper - lower > 1)
//    lower = mid
//  else if value <= currentTarget && (upper - lower > 1)
//    upper = mid
//
//if array[lower] === target 
//  lowerIndex = lower
//else if array[upper] === target
//  lowerIndex = upper
//else 
//  lowerIndex = upper + 1
//
//lower = 0
//upper = array.length - 1
//currentTarget = target + 1
//
//while lower + 1 < upper
//  mid = lower + Math.floor((upper - lower) / 2)
//  value = array[mid]
//  if value >= currentTarget && (upper - lower > 1) // might need to massage
//    lower = mid
//  else if value < currentTarget && (upper - lower > 1)
//    upper = mid
//
//if array[lower] === target
//  upperIndex = lower
//else if array[upper] === target
//  upperIndex = upper
//else 
//  upperIndex = lower - 1
//
//if upperIndex < lowerIndex return [-1, -1]
//return [lowerIndex, upperIndex]