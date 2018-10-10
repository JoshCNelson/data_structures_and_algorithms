//A palindromic number reads the same both ways. 
//The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
//Find the largest palindrome made from the product of two 3-digit numbers.

const isPalindrome = (a) => {
  let turnToString = String(a);
  let firstHalf = turnToString.substr(0, turnToString.length / 2);
  let secondHalf = turnToString.substr(turnToString.length / 2).split('').reverse().join('');
  return firstHalf === secondHalf;
}

const largestPalindrome = (num) => {
  let currentMax = 0;

  for (let i = 999; i > 1; i--) {
    for (let j = 999; j > 1; j--) {
      let current = i * j;
      if (current > currentMax && isPalindrome(current)) {
        currentMax = current;
      } 
    }
  }

  return currentMax;
}

let max = 999 * 999
largestPalindrome(max);



