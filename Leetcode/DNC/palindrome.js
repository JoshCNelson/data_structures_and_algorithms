function palindrome(string, left=0, right=string.length - 1) {
  if (right - left <= 1) {
    return true;
  }

  if (string[left] === string[right]) {
    return palindrome(string, left + 1, right - 1);
  } else {
    return false;
  }
}