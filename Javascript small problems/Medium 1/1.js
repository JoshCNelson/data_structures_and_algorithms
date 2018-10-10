//Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.
//If the input is not an array, return undefined.
//If the input is an empty array, return an empty array.
//Review the test cases below, then implement the solution accordingly.
/*
*PROBLEM DOMAIN*
 input: an array of elements
 [7, 3, 5, 2, 9, 1]
 ['a', 'b', 'c']
 output: a new array with the first element moved to the last index
 [3, 5, 2, 9, 1, 7]
 ["b", "c", "a"]
 implicit requirements:
 - a new array must be return, old one may not be modified (pure function)
 - inputs may be non-array or empty arrays, will need to have a plan in place to deal w/ it
 rules:
 - the input must be a non-empty array or else undefined or empty array is returned
 - The input may not be modified
 - the first element in the input must be moved the the last index in th output
 - if input is empty array, return empty array
 - if input is non-array, return undefined
 questions?: none
*TEST CASES*
 Normal case:
  - see below
 Edge Case?: 
  - see below
*DATA STRUCTURE*
  - the input for the happy path is an array 
    and the output is an array so will keep
    the data structure consistent
*Algorithm*
  - check if the input is not an array
    - if not an array return undefined
  - check if the input is an empty array
    - if true return an empty array
  - starting at index 1, slice the rest of the array
  - concat the sliced array with the first element of the input array 
  
*/

function rotateArray(array) {
  if (array instanceof Array) {
    if (array === []) {
      return [];
    }
  } else {
    return;
  }

  return array.slice(1).concat(array.slice(0, 1));
}

rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
rotateArray(['a']);                    // ["a"]
rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
rotateArray([]);                       // []

// return `undefined` if the argument is not an array
rotateArray();                         // undefined
rotateArray(1);                        // undefined


// the input array is not mutated
var array = [1, 2, 3, 4];
rotateArray(array);                    // [2, 3, 4, 1]
array;                                 // [1, 2, 3, 4]
