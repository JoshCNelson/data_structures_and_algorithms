function reverse(string) {
  return string.split(' ').map(val => {
    let reverseString = ''
    for (let i = val.length - 1; i >= 0; i--) {
      reverseString += val[i];
    }

    return reverseString;
  }).join(' ');
}