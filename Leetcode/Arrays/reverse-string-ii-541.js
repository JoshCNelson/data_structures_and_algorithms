var reverseStr = function(s, k) {
  let newStr = '';
  let length = s.length;
  let current = 0;
  
  while (true) {
    if (current === length) {
      return newStr;
    } else if (length - current < k) {
      for (let i = length - 1; i >= current; i--) {
        newStr += s[i];
      }

      return newStr;
    } else if (length - current >= k && (length - current) < (2 * k)) {
      let subSection = current + k - 1;
      
      for (let i = subSection; i >= current; i--) {
        newStr += s[i];
      }

      while (subSection < length - 1) {
        subSection++;
        newStr += s[subSection];
      }

      return newStr;
    } else {
      let subSection = current + k - 1; // 1
    
      for (let i = subSection; i >= current; i--) {
        newStr += s[i];
      }

      for (let i = subSection + 1; i <=  current + (2 * k) - 1; i++) {
        newStr += s[i];
      }

      current = current + (2 * k);
    }
  }
};
