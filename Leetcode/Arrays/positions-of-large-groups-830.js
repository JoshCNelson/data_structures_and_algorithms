var largeGroupPositions = function(str) {
  let trailing = 0;
  let leading = 1;
  let result = [];
  let counter = 1;

  while (leading < str.length) {
    while (str[trailing] === str[leading]) {
      leading++;
      counter++;
    }

    if (counter >= 3 && (leading - trailing) >= 3) {
      result.push([trailing, leading - 1]);
    }

    trailing = leading;
    leading++;
    count = 1;
  }

  return result;
};
