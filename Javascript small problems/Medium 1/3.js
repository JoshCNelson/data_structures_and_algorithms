/*Take the number 735291 and rotate it by one digit to the left, 
getting 352917. Next, keep the first digit fixed in place and 
rotate the remaining digits to get 329175. Keep the first two 
digits fixed in place and rotate again to get 321759. Keep the 
first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate 
the final two digits to get 321579. The resulting number is called 
the maximum rotation of the original number.

Write a function that takes an integer as an argument, and 
returns the maximum rotation of that integer. You can 
(and probably should) use the rotateRightmostDigits function from 
the previous exercise.
*/

/*
*PROBLEM DOMAIN*
 input: 
 - a number that will be rotated ex: 123456
 
 output:
 - The input number's maximum rotation

 implicit requirements:
 - any leading zeroes are dropped ( so return 15 instead of 015)

 rules:
 - starting at index 0, rotate the current indexes number 
   and move down the line until you reach n - 1 (swap the last 2 numbers)
 - return the output as a number
  - remove any leading 0s 

 questions?:
*TEST CASES*
 Normal case: 
 - see below

 Edge Case?:
 - see below
*DATA STRUCTURE*
- input is a number
  - we want to conver it to a string and perform the necessary opertaitons
- once we complete the operations, return as a number

*Algorithm*
  - take the initial number input and convert into a string
    - create a let that is return_string
  - create a for loop that starts at 1
    - slice off i - 1 from the return_string and pass it into the rotate function
    - build the return_string + the part that was rotated.
    - loop through until i is greater then the string length
  - take the return string
    - remove any leading '0's
    - return after converting to a number 
*/

function maxRotation(number) {
  let numberString = String(number);

  for (let i = numberString.length; i > 0; i--) {
    let sliced_string = rotateRightmostDigits(numberString.slice(numberString.length - i), i);
    numberString = numberString.slice(0, numberString.length - i) + sliced_string;
  }

  return parseInt(numberString, 10);
}

function rotateRightmostDigits(number, n) {
  let sliced_section = String(number).slice(-n);
  let unsliced_section = String(number).slice(0, -n);
  return unsliced_section.concat(rotateArrayOnce(sliced_section));
}

function rotateArrayOnce(string) {
  return string.substr(1).concat(string.substr(0, 1));
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845