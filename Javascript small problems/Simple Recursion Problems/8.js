
/*
*PROBLEM DOMAIN*
 input:
 - two sorted arrays

 output:
 - a new array
  - new array contains all the elements of the input in sorted order
    - input ([1, 2, 3], [2, 3, 4] -> [1, 2, 2, 3, 3, 4]
 
 implicit requirements:
 - The input arrays do not need to be equal length

 rules:
 - return a new array that contains all the element from both inputs in sorted order
  - you may not sort the new array
  - you must build the element one at a time in proper order (i.e. newArray[0] then newArray[1], etc..)
 - You cannot mutate the input arrays
 - The input arrays may be different lengths

  questions?:
  - none

*TEST CASES*
 Normal case:
 - see below
 Edge Case?:
 - see below
*DATA STRUCTURE*
- Our inputs are arrays and our output is an array
- The processing we are wanting to do is available in arrays, thus we will maintain arrays throughout

*Algorithm*
- base case, array1 and array2 copies are empty / alternatively output.length === input1.length + input2.length
 - return the built output array

- start by slicing copies of the input arrays
- check for base case
- if not base, case
  - create lowest val var
  - loop over input 1 and store the lowest val
  - loop ovr input 2 and compare vals to lowest val,
      - if lower val is found replace it with the new val
  - upon completion, push the lowest val onto the eventual output array
  - see if input1 has an indexOf the lowest val,
      - if it does call:
        - splice the val from input 1 and call the merge function again
          - pass in input1 / input 2 and the output array
      - else splice the val from input 2 and call the merge function again
  -repeat till base case
*/

// purposely using recursion to solve

function merge(array1, array2, outputArray = []) {
  if (array1.length === 0 && array2.length === 0) {
    return outputArray
  }

  let copy1 = array1.slice(); 
  let copy2 = array2.slice(); 
  let lowestVal = 10;
  let longest = copy1.length > copy2.length ? copy1.length : copy2.length;

  for (let i = 0; i < longest; i++) {
    copy1[i] < lowestVal ? lowestVal = copy1[i] : '';
    copy2[i] < lowestVal ? lowestVal = copy2[i] : '';
  }

  outputArray.push(lowestVal);
  
  if (copy1.indexOf(lowestVal) !== -1) { 
    copy1.splice(copy1.indexOf(lowestVal), 1);
    return merge(copy1, copy2, outputArray);
  } else {
    copy2.splice(copy2.indexOf(lowestVal), 1);
    return merge(copy1, copy2, outputArray);
  }
}

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]