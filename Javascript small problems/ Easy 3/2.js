//Write a program that solicits six numbers from the user, 
//then logs a message that describes whether or not 
//the sixth number appears amongst the first five numbers.

const numbers = [];
let lastNumber;

numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));

lastNumber = prompt('Enter the last number:');

if (numbers.indexOf(lastNumber) === -1) {
  console.log(`The number ${lastNumber} does not appear in [${numbers}].`)
} else {
  console.log(`The number ${lastNumber} appears in [${numbers}].`)
}