//Write a function that returns true if its integer argument is palindromic, 
//or false otherwise. A palindromic number reads the same forwards and backwards.

const isPalindrome = string => string === string.split('').reverse().join('');
const isPalindromicNumber = number => isPalindrome(String(number));

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true