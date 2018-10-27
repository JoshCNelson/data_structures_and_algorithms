var numJewelsInStones = function(j, s) {
  let hash = {};
  let count = 0;
  
  for (let i = 0; i < j.length; i++) {
    hash[j[i]] = true;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]]) { count++ }
  }

  return count;
};