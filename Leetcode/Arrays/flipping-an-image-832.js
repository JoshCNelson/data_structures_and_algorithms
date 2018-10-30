function flipAndInvertImage(array) {
  return array.map(subArray => flipAndInvert(subArray));
}

function flipAndInvert(array) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    [ array[start], array[end] ] = [ array[end], array[start] ];
    start++;
    end--;
  }

  return array.map(ele => ele === 1 ? 0 : 1);
};