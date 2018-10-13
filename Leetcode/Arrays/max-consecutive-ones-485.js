function maxConsecutive(array) {
  let longest = 0;
  let current = 0;

  array.forEach(val => {
    if (val === 1) {
      current++;
      current > longest ? longest = current : current;
    } else {
      current = 0;
    }
  });

  return longest;
}