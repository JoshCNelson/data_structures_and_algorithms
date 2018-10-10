//The sum of the squares of the first ten natural numbers is,
//12 + 22 + ... + 102 = 385
//The square of the sum of the first ten natural numbers is,
//(1 + 2 + ... + 10)2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// Sum square difference

const SQUARED = 2;

const sumSquareDifference = n => calculateSumOfSquares(n) - calculateSquareOfSum(n); 

const calculateSquareOfSum = n => {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += Math.pow(i, SQUARED);
  }

  return total;
}

const calculateSumOfSquares = n => {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += i
  }

  return Math.pow(total, SQUARED);
}

sumSquareDifference(100); 