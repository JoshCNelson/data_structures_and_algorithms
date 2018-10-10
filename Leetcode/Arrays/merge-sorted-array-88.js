// merge sorted arrays

function merge(arr1, m, arr2, n) {
  let currentEnd = arr1.length - 1;

  while (n > 0) {
    if (m === 0) {
      while (n > 0) {
        arr1[currentEnd] = arr2[n - 1];
        n--;
        currentEnd--;
      }
      return arr1;
    }

    if ((arr1[m - 1] || 0) < arr2[n - 1]) {
      arr1[currentEnd] = arr2[n - 1];
      n--;
      currentEnd--;
    } else {
      arr1[currentEnd] = arr1[m - 1];
      m--;
      currentEnd--;
    }
  }

  return arr1;
}