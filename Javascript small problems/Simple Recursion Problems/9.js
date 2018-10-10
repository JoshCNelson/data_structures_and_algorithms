

//merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
function merge(array1, array2, outputArray = []) {
  if (array1.length === 0 && array2.length === 0) {
    return outputArray
  }

  let copy1 = array1.slice(); 
  let copy2 = array2.slice(); 
  let lowestVal = 10;
  let longest = copy1.length > copy2.length ? copy1.length : copy2.length;

  for (let i = 0; i < longest; i++) {
    copy1[i] < lowestVal ? lowestVal = copy1[i] : '';
    copy2[i] < lowestVal ? lowestVal = copy2[i] : '';
  }

  outputArray.push(lowestVal);
  
  if (copy1.indexOf(lowestVal) !== -1) { 
    copy1.splice(copy1.indexOf(lowestVal), 1);
    return merge(copy1, copy2, outputArray);
  } else {
    copy2.splice(copy2.indexOf(lowestVal), 1);
    return merge(copy1, copy2, outputArray);
  }
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  let half = Math.floor(array.length / 2); // 2
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);

  let arr1 = mergeSort(firstHalf); 
  let arr2 = mergeSort(secondHalf); 

  return merge(arr1, arr2);
}

console.log(mergeSort([9, 5, 7, 1]));           // [1, 5, 7, 9]
console.log(mergeSort([5, 3]));                 // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4]));        // [1, 2, 4, 6, 7]
console.log(mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie']));
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
console.log(mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46]));
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]