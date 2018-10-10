//Write a function that takes two strings as arguments, 
//determines the longer of the two strings, and then 
//returns the result of concatenating the shorter string, 
//the longer string, and the shorter string once again. 
//You may assume that the strings are of different lengths.

const shortLongShort = (a, b) => {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`; 
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

