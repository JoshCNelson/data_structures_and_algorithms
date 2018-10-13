function duplicatesCheck(array) {
  let seen = {};

  for (let i = 0; i < array.length; i++) {
    if (seen[array[i]] === true) {
      return true;
    } else {
      seen[array[i]] = true;
    }
  }

  return false;
}