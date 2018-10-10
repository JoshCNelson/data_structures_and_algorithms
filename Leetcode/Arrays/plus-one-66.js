//current solution does not work for large numbers due to JS 

function plusOne(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    let multiplier = 10 ** i;
    let pointer = array.length - 1 - i;
    let currentVal = array[pointer] * multiplier; 
    //console.log(multiplier, currentVal)
    console.log(total)
    total += currentVal;
  }

  return total;
  return String(total + 1).split("").map(Number);
}

//console.log(plusOne([1,2,3]))
//console.log(plusOne([9,9]))
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.