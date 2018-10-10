//283. Move Zeroes
//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// using writer / reader pointers to solve
   

function moveZeroes(array) {
  let writer = 0;
  let reader = 0;
  
  while (reader < array.length) {
    while (array[reader] === 0) {
      reader++;
    }
    
    if (array[reader] !== 0 && reader < array.length) {
      array[writer] = array[reader];
      writer++;
      reader++;
    }
  }
  
  while (writer < array.length) {
    array[writer] = 0;
    writer++;
  }
}


