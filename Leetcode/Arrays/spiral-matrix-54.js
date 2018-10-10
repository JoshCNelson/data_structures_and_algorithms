//54. Spiral Matrix
//Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.


/*
*PROBLEM DOMAIN*
 input:
  - array of arrays (2D array)

//[
// [ 1, 2, 3 ],
// [ 4, 5, 6 ],
// [ 7, 8, 9 ]
//]

 output:
  - array in spiral order
  [1,2,3,6,9,8,7,4,5]

 implicit requirements:
  - the return array should make a spiral
 rules:
  - order of operation
    - return the first row first [1, 2, 3]
    - return the last val in the middle row(s) if they have them [6]
    - the last row in reverse order [9, 8, 7]
    - the rest of the middle row vals in order [5, 6]

 questions?:
*TEST CASES*
 Normal case:
  - 
 Edge Case?:
  - 
*DATA STRUCTURE*
*Algorithm*
  - create a new array
    - while array.length > 0
    - shift the entire top row
    - pop the last element from the middle rows
    - 

*/



var spiralOrder = function(matrix) {
  if (matrix.length === 0) return [];

  const result = [];
  const elementCount = matrix.length * matrix[0].length;

  let top = 0;
  let right = matrix[0].length - 1;
  let bottom = matrix.length - 1;
  let left = 0;

  while (result.length < elementCount) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }

    top++;
    if (result.length === elementCount) return result;

    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }

    right--;
    if (result.length === elementCount) return result;

    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }

    bottom--;
    if (result.length === elementCount) return result;

    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }

    left++;
  }

  return result;
};
