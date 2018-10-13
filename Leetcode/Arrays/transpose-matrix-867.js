function transpose(array) {
  let newArr = getNewArray(array[0].length);
  let x = 0;
  let y = 0;

  while (y < array.length) {
    x = 0;

    while (x < array[0].length) {
      newArr[x].push(array[y][x])
      x++;
    }

    y++;
  }

  return newArr;
}

function getNewArray(arrayLength) {
  let array = [];

  for (let i = 0; i < arrayLength; i++) {
    array.push([]);
  }
  return array;
}