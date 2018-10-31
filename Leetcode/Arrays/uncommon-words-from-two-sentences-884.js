var uncommonFromSentences = function(a, b) {
  let hash = {};
  let result = [];
  
  a.split(' ').forEach(word => {
    if (hash[word]) {
      hash[word] += 1
    } else {
      hash[word] = 1;
    }
  });
  
  b.split(' ').forEach(word => {
    if (hash[word]) {
      hash[word] += 1
    } else {
      hash[word] = 1;
    }
  });
  
  Object.keys(hash).forEach(word => hash[word] === 1 ? result.push(word) : word)
  
  return result;
};