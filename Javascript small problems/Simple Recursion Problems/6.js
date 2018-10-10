//substringsAtStart('abc'));      // ["a", "ab", "abc"]
function substringsAtStart(input, arr = []) {  
  if (input.length === 1) {
    arr.unshift(input);
    return arr;
  } else {
    arr.unshift(input);
    return substringsAtStart(input.slice(0, input.length - 1), arr);
  }
}

function substrings(string, arr = []) {
  if (string.length === 1) {
    arr.push(string);
    return arr;
  } else {
    let tempArr = substringsAtStart(string); // ["a", "ab", "abc", "abcd", "abcde",]
    tempArr.forEach(val => arr.push(val));
    return substrings(string.slice(1), arr);
  }
}

substrings('abcde');
// returns
//[ "a", "ab", "abc", "abcd", "abcde",
//  "b", "bc", "bcd", "bcde",
//  "c", "cd", "cde",
//  "d", "de",
//  "e" ]