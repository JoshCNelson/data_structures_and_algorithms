function selectionSort(array) {

  for (let i = 0; i < array.length; i++) {
    let currentMinIdx = i;

    for (let j = i; j < array.length; j++) {

      if (array[j] < array[currentMinIdx]) {
        currentMinIdx = j; 
      }
    }

    [ array[i], array[currentMinIdx] ] = [ array[currentMinIdx], array[i] ];
  }

  return array;
}