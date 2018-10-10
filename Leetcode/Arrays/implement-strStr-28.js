//28. Implement strStr()
//
//
//Implement strStr().
//
//Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
//Example 1:
//
//Input: haystack = "hello", needle = "ll"
//Output: 2
//Example 2:
//
//Input: haystack = "aaaaa", needle = "bba"
//Output: -1
//Clarification:
//
//What should we return when needle is an empty string? This is a great question to ask during an interview.
//
//For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// input:
// -2 strings
//   -str1, the "haystack"
//   -str2, the "needle"
//
// output:
// -index of the first occurrence of needle in haystack
// -if needle does not occur in haystack (or haystack is empty), return -1
// -if needle is empty, return 0
//
// examples:
// strStr('hello', 'll') === 2;
// strStr('aaaaa', 'bba') === -1;
// strStr('hello', '') === 0;
// strStr('', 'a') === -1;
// strStr('hello', 'h') === 0;
// strStr('hello', 'o') === 4;
// strStr('hello', 'hello') === 0;
//
// questions:
// -should strStr('he1lo', 1) be 2 or -1? (ie do we attempt string conversion for needle?)
//   -assuming no, needle must be a string
//
// approach:
// -return 0 if needle is an empty string
// -loop from 0 (pointer) to length of haystack minus length of needle:
//   -check if haystack from pointer1 to pointer1 + needle length equals needle
//     -if yes, return pointer1
// -return -1

var strStr = function(haystack, needle) {
  if (needle === '') return 0;

  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }

  return -1;
};

console.log(strStr('hello', 'll') === 2);
console.log(strStr('aaaaa', 'bba') === -1);
console.log(strStr('hello', '') === 0);
console.log(strStr('', 'a') === -1);
console.log(strStr('hello', 'h') === 0);
console.log(strStr('hello', 'o') === 4);
console.log(strStr('hello', 'hello') === 0);