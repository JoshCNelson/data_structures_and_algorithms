//Write a program that asks the user to enter an integer greater than 0, 
//then asks if the user wants to determine the sum or the product 
//of all numbers between 1 and the entered integer, inclusive.

const computeSum = (number) => {
  let total = 0;

  for (let i = 1; i <= number; i += 1) {
    total += i;
  }

  return total;
}

const computeProduct = (number) => {
  let total = 1;


  for (let i = 1; i <= number; i += 1) {
    total *= i;
  }

  return total;
}

let number = parseInt(prompt('Please enter an integer greater than 0'), 10);
let operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');
let sum;
let product;

if (operation === 's') {
  sum = String(computeSum(number));
  console.log('The sum of the integers between 1 and ' + String(number) + ' is ' + sum + '.');
} else if (operation === 'p') {
  product = String(computeProduct(number));
  console.log('The product of the integers between 1 and ' + String(number) + ' is ' + product + '.');
} else {
  console.log('Oops. Unknown operation.');
}