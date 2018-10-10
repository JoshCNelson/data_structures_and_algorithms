var canConstruct = function(ransomNote, magazine) {
  if (magazine === '' && ransomNote === '') { return true }
  
  let length = ransomNote.length;
  
  for (let i = 0; i < magazine.length; i++) {
    console.log(magazine.slice(i, length))
    if (magazine.slice(i, i + length) === ransomNote) { return true }
  }
  
  return false;
};

console.log(canConstruct('bg', "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))