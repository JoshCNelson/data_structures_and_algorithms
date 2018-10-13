function missingNumber(array) {
  let length = array.length;
  let total = getExpectedTotal(length);
  let missingNum = total;
  
  for (let i = 0; i < length; i++) {
    missingNum -= array[i];
  }
  
  return missingNum;
}

function getExpectedTotal(length) {
  let total = 0
  
  for (let i = 0; i < length; i++) {
    total += i;
  }
  
  return total + length;
}