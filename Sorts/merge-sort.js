function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid, array.length));

  return merge(left, right);
}

function merge(arr1, arr2) {
  let result = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (arr1.length > pointer1 && arr2.length > pointer2) {
    if (arr1[pointer1] < arr2[pointer2]) {
      result.push(arr1[pointer1++]);  
    } else {
      result.push(arr2[pointer2++]);
    }
  }

  while (arr1.length > pointer1) {
    result.push(arr1[pointer1++]);
  }

  while (arr2.length > pointer2) {
    result.push(arr2[pointer2++]);
  }

  return result;
}



