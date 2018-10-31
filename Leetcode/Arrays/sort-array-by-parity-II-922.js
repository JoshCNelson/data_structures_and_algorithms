var sortArrayByParityII = function(array) {
  let newArr = new Array(array.length);
  let odd = 1;
  let even = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      newArr[even] = array[i];
      even += 2;
    } else {
      newArr[odd] = array[i];
      odd += 2;
    }
  }

  return newArr;
};