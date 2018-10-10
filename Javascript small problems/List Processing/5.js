//Write a function that takes a string argument, 
//and returns a list of all substrings that start from the beginning of the string, 
//ordered from shortest to longest.

const substringsAtStart = str => str.split('').map((val, ind) => str.substr(0, ind + 1));

substringsAtStart('abc');      // ["a", "ab", "abc"]
substringsAtStart('a');        // ["a"]
substringsAtStart('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]