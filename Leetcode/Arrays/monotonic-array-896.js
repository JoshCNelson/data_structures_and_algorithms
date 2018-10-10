function isMonotonic(array) {
  let direction = null;
  let trailing = 0;
  let leading = 1;

  while (leading <= array.length - 1) {
    if (direction) {
      if (direction === 'asc') {
        if (array[trailing] > array[leading]) { return false }
      } else if (direction === 'desc') {
        if (array[trailing] < array[leading]) { return false }
      }
    } else {
      if (array[trailing] < array[leading]) {
        direction = 'asc';
      } else if (array[trailing] > array[leading]) {
        direction = 'desc';
      }
    }

    leading++;
    trailing++;
  }
  
  return true;
}
