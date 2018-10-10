function sortArrayByParity(array) {
  let reader = 0;
  let writer = 0;

  for (let i = 0; i < array.length; i++) { 
    if (isEven(array[reader])) {
      [ array[writer], array[reader] ] = [ array[reader], array[writer] ]
      reader++;
      writer++;
    } else {
      reader++;
    }
  }

  return array;
}

function isEven(num) {
  return num % 2 === 0;
}