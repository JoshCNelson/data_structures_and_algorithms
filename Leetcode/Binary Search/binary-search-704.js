// Iterative Binary Search
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left + 1 < right) {
    let mid = Math.floor(left + (right - left) / 2);
    let midValue = array[mid];

    if (midValue === target) {
      return mid;
    } else if (midValue > target) {
      right = mid;
    } else if (midValue < target) {
      left = mid;
    }
  }

  return left;
}

//Recursive Binary Search
function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left=0, right=array.length - 1) {
  let mid = Math.floor( left + (right - left) / 2);
  let midVal = array[mid];
  
  if (right < left) {
    return -1;
  } 

  if (midVal === target) {
    return mid;
  } else if (target < midVal ) {
    return binarySearchHelper(array, target, left, mid - 1);
  } else {
    return binarySearchHelper(array, target, mid + 1, right);
  }
}


//console.log(binarySearch([1, 2, 4, 6, 7, 8, 9, 10], 6));