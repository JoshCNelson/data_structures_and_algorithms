// Lomutos partition
function partition(arr, pivot, left, right) { 
  var pivotValue = arr[pivot],
      partitionIndex = left;

  for(var i = left; i < right; i++){
   if(arr[i] > pivotValue){
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

function quickSelect(array, k, left=0, right=array.length - 1) {
  if (right - left <= 0) { 
    return array[left] 
  }

  let pivot = right;
  let partitionIndex = partition(array, pivot, left, right);  
  let valL;
  let valR;

  if (k - 1 > partitionIndex) { // we need to go right
    valR = quickSelect(array, k, partitionIndex + 1, right);
  } else if (k - 1 < partitionIndex) {
    valL = quickSelect(array, k, left, partitionIndex - 1);
  } else {
    return array[partitionIndex];
  }
  
  return valL || valR; // we return from the base case or line 37 (whichever direction it happens to go)
}