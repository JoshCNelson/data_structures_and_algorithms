function partition(arr, pivot, left, right){
  var pivotValue = arr[pivot],
      partitionIndex = left;

  for(var i = left; i < right; i++){
   if(arr[i] < pivotValue){
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

function quicksort(array, left, right) {
  if (left < right) {
    let pivot = right;
    let partitionIndex = partition(array, pivot, left, right);
    quicksort(array, left, partitionIndex - 1);
    quicksort(array, partitionIndex + 1, right);
  }

  return array;
}