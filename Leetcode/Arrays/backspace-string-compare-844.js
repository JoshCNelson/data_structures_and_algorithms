var backspaceCompare = function(s, t) {
  sArray = s.split('');
  tArray = t.split('');

  for (let i = 0; i < sArray.length; i++) {
    if (i === 0 && sArray[i] === '#') {
      sArray.splice(0, 1);
      i -= 1;
    } else if (sArray[i] === '#') {
      sArray.splice(i - 1, 2);
      i -= 2;
    }
  }

  for (let i = 0; i < tArray.length; i++) {
    if (i === 0 && tArray[i] === '#') {
      tArray.splice(0, 1);
      i -= 1;
    } else if (tArray[i] === '#') {
      tArray.splice(i - 1, 2);
      i -= 2;
    }
  }

  return sArray.join('') === tArray.join('');
};