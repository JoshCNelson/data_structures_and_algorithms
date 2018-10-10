//Write a function that takes a string argument, and returns a new string that contains the value of the 
//original string with all consecutive duplicate characters collapsed into a single character.

const crunch = (string) => {
  let newString = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i - 1] !== string[i]) {
      newString += string[i];
    }
  } 

  return newString;
}


crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""