var validPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  let flag = false;

  while (start < end) {
    let startChar = s[start];
    let endChar = s[end];

    if (startChar === endChar) {
      start++;
      end--;  
    } else {

      // this basically says, we ran into a non-palindrome,
      // check both the scenarios of ignorning the left or 
      // right value, if one of the scenarios returns true
      // then we have a palindrome
      return isPalindrome(s, start + 1, end) || isPalindrome(s, start, end - 1);
    }

  }
  return true;
};

function isPalindrome(str, start, end) {
  while (start < end) {
    if (str[start] === str[end]) {
      start++;
      end--;
    } else {
      return false;
    }
  }

  return true;
}