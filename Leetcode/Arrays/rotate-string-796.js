//796. Rotate String

//We are given two strings, A and B.
//A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

function rotate(string, rotation) {
  if (string === '' && rotation === '') {
    return true;
  }
  
  for (let i = 0; i < string.length; i++) {
    if (string === rotation) {
      return true;
    } else {
      string = `${string.slice(1)}${string.substr(0, 1)}`;
    }
  }

  return false;
}



let a = 'abcde';
let b = 'cdeab';

//console.log(rotate(a,b));

let x = 'abcde';
let y = 'abced';

//console.log(rotate(x, y)); // false
console.log(rotate('', '')); // true
