// write a recursive function that adds n to every preceecding number

function fib(n) {
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}


console.log(fib(5));
console.log(fib(10));

// base case 1 = 1
// 1 + sum(2) = 3
// 3 + sum(3) = 6 
// 6 + sum(4) = 10
// 10 + sum(5) = 15
// 15 + sum(6) = 21
// 21 + sum(7) = 28
// 28 + sum(8) = 36
// 36 + sum(9) = 45
// 45 + sum(10) = 55