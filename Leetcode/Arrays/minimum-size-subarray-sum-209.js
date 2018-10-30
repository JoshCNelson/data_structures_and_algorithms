function minimumSubSum(s, array) {
  let anchor = 0;
  let runner = 0;
  let currentTotal = array[anchor];
  let count = 1;
  let minSub = Infinity;

  while (runner < array.length) {

    while (currentTotal < s) {
      runner++;
      count++;
      currentTotal += array[runner];
    }

    count < minSub ? minSub = count : count;
    currentTotal -= array[anchor];
    anchor++;
    count--;
  }

  return minSub === Infinity ? 0 : minSub;
}
