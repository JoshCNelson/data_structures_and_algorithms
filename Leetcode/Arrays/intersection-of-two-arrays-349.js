function intersection(array1, array2) {
  let seen = {};
  let result = [];

  array1.forEach(val => seen[val] = true );

  array2.forEach(val => {
    if (seen[val] === true) {
      result.push(val);
      seen[val] = false;
    }
  });

  return result;
}