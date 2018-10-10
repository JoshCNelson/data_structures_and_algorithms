//Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.
//Examples:

/*
*PROBLEM DOMAIN*
 input: 
 - a number
 - n, which represents the last n digits to be rotated of number
 output:
 - the number, that was input, with the last n digits rotated
 implicit requirements:
 - the inputs will always be numbers
 rules:
 - take the first number parameter and rotate the last n numbers, where n is the second parameter
 questions?:
 - Can n be greater then the length of number? (no)
 - Can n be less than 1? (no)
*TEST CASES*
 Normal case: see below
 Edge Case?: no edge cases for this one (no)
*DATA STRUCTURE*
- our two inputs are numbers
  - we need to  convert the first parameter into a string
  - once we have done the necessary computations on the string
    - convert the string back into a number and return as output
*Algorithm*
  - take the algo we built in 1.js, we can use it for string here
  - take first parameter and convert to string
  - we take the subsring of the string and slice off the last n elements
  - we take the substr and pass it into the rotatearray method to rotate the first to last
  - we append the return value from the rotate method onto the section taht was left untouched
  - we convert the string back into a number and output it
*/

function rotateRightmostDigits(number, n) {
  let sliced_section = String(number).slice(-n);
  let unsliced_section = String(number).slice(0, -n);
  return parseInt(unsliced_section.concat(rotateArrayOnce(sliced_section)), 10);
}

function rotateArrayOnce(string) {
  return string.substr(1).concat(string.substr(0, 1));
}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
