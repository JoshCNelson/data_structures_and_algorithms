//Write a function that takes a sentence string as an argument, and returns that string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding digit character.

/*
*PROBLEM DOMAIN*
 input: 
 - a string that has normal words and "number words"
 output:
 - a string with the "number words" converted to its corresponding digit character
 implicit requirements:
 rules:
 - modify the input string
 - convert each occurence of a "number word" to its corresponding digit char
 - maintain the integrity of the rest of the sentence (i.e punctionations, letters, etc...)
 questions?:
 - can we expect the input to always be a string? (yes)
 
*TEST CASES*
 Normal case: 
 - See below
 Edge Case?:
 - none
*DATA STRUCTURE*
  - we get a string input and we are expected to have a string output
    - since we are going to want to use a replace feature we don't need to change to a different data structure
*Algorithm*
  - create an object called numberWordConverter
    - this object should looke like this { 'five': '5', 'six': '6', etc..}
  - iterate over the object
  - replace the matched part of the string with the correpsonding digit
  - upon completion of the interations return the mutated string
*/


function wordToDigit(string) {
  const numberWordConverter = {
    'zero': '0',
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
  };

  for (numberWord in numberWordConverter) {
    string.replace(numberWord, numberWordConverter);
  }

  return string;
}


wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."
