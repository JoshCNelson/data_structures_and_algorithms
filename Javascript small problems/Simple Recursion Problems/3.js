
function findFibonacciIndexByLength(n, a = 1, b = 1) {
  if (String(a).length >= n) {
    return 1
  } else {
    return 1 + findFibonacciIndexByLength(n, b, a + b)
  }
}

//const findFibonacciIndexByLength = (n, a = 1, b = 1) => {
//  return String(a).length >= n ? 1 : 1 + findFibonacciIndexByLength(n, b, a + b);
//};

console.log(findFibonacciIndexByLength(2));       // 7
console.log(findFibonacciIndexByLength(10));      // 45
console.log(findFibonacciIndexByLength(16));      // 74