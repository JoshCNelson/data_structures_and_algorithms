function findLengthOfLCIS(array) {
  if (array.length === 0) { return 0 }

  let longest = 1;
  let current = 1;
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      current++;
      current > longest ? longest = current : current;
    } else {
      if (current > longest) {
        longest = current;
        current = 1;
      } else {
        current = 1;
      }
    }
  }

  return longest;
}