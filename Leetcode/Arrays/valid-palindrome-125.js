var isPalindrome = function(s, left=0, right=s.length - 1) {
  let alphaNumeric = /[A-Z0-9]/i;

  while (s[left] && s[left].match(alphaNumeric) === null) {
    left++;
  }

  while (s[right] && s[right].match(alphaNumeric) === null) {
    right--;
  }
  
  if (right <= left) { return true }

  if (s[left].toUpperCase() === s[right].toUpperCase()) {
    return isPalindrome(s, left + 1, right - 1);
  } else {
    return false;
  }
};