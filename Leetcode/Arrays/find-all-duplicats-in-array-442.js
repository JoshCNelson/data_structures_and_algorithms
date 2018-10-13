function findDups(array) {
  if (array === []) { return [] }
  
  let sortedArray = array.sort((a, b) => a - b);
  return sortedArray.filter((val, ind) => sortedArray[ind] === sortedArray[ind + 1]);
}

findDups([4,3,2,7,8,2,3,1]);