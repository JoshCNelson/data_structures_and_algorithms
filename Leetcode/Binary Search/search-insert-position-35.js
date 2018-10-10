//35. Search Insert Position
//Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//You may assume no duplicates in the array.

function searchInsert(array, target) {
  let lower = 0;
  let upper = array.length - 1;

  while (lower + 1 < upper) {
    let mid = Math.floor(lower + (upper - lower) / 2);
    let value = array[mid];

    if (value === target) {
      return mid;
    } else if (value > target) {
      upper = mid;
    } else if (value < target) {
      lower = mid;
    }
  }

  if (array[lower] >= target) { // if target is in lower
    return lower;
  } else if (array[upper] < target) {
    return upper + 1;
  } else {
    return upper;
  }
}

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1, 3, 5, 6], 2)); // 1

// mental model - basic binary search with some case handling when we get
// to the edges of the array


// psuedo code
//LOWER = 0
//UPPER = array.length - 1
//WHILE LOWER + 1 < UPPER
//MID = LOWER + ((UPPER - LOWER) / 2)
//  VALUE = array[MID]
//  IF VALUE == TARGET
//    RETURN MID
//  ELSE IF VALUE > TARGET
//    UPPER = MID
//  ELSE IF VALUE < TARGET
//    LOWER = MID
//IF array[LOWER] == TARGET
//  RETURN LOWER
//ELSE IF array[UPPER] === TARGET
//  RETURN UPPER
//ELSE IF array[LOWER] > TARGET
// RETURN LOWER
//ELSE IF array[UPPER] < TARGET
//  RETURN UPPER + 1
//

