function partition(arr, pivot=array.length-1, left=0, right=arr.length-1) {
  var pivotValue = arr[pivot],
      partitionIndex = left;

  for (var i = left; i < right; i++) {
    
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
 }

 swap(arr, right, partitionIndex);
 return partitionIndex;
}

function swap(array, left, right) {
  let temp = array[left];
  array[left] = array[right];
  array[right] = temp;
}