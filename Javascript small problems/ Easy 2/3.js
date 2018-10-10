//Write a function that takes one argument, a positive integer, and returns a string of alternating '1's and '0's, always starting with a '1'. 
//The length of the string should match the given integer.

const stringy = (number) => {
  let str = ''

  for (let i = 0; i < number; i++) {
    str[i - 1] !== '1' ? str += '1' : str += '0';
  }
  
  return str
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
