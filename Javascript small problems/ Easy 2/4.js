//Write a function that calculates and returns the index of the first Fibonacci number that has the 
//number of digits specified by the argument. (The first Fibonacci number has an index of 1.)
//You may assume that the argument is always an integer greater than or equal to 2.

const findFibonacciIndexByLength = (length) => {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

//ßconsole.log(fibonacciLengthReached(55, 2));

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74