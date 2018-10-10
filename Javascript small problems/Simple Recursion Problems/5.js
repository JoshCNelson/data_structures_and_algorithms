function substringsAtStart(input, arr = []) {  
  if (input.length === 1) {
    arr.unshift(input);
    return arr;
  } else {
    arr.unshift(input);
    return substringsAtStart(input.slice(0, input.length - 1), arr);
  }
}


console.log(substringsAtStart('abc'));      // ["a", "ab", "abc"]
console.log(substringsAtStart('a'));        // ["a"]
console.log(substringsAtStart('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]