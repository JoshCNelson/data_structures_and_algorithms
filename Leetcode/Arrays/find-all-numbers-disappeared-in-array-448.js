function disappearedNumbers(array) {
  let returnArray = [];
  let result = [];

  for (let i = 1;  i <= array.length; i++) {
    returnArray.push(i);
  }

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    returnArray[num - 1] = null;
  }

  for (let i = returnArray.length - 1; i >= 0; i--) {
    if (returnArray[i] !== null) {
      result.unshift(returnArray[i])
    }
  }

  return result;
}