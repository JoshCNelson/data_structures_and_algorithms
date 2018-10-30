function firstUniqChar(str) {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  }
  
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (hash[char] === 1) { return i }
  }

  return -1;
}
